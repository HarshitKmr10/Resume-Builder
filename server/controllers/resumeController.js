const User = require('../models/UserSchema');
const Resume = require('../models/resumeSchema');
const QRCode = require('qrcode');
const config = require('config');
const path = require('path');
const fs = require('fs');

const clientUrl = config.get("clientURL");
const qrCodeDir = path.join(__dirname, "../", 'qrcodes');
const uploadsDir = path.join(__dirname, "../", 'uploads');

// create qrcode directory if doesn't exists
if (!fs.existsSync(qrCodeDir)) {
  fs.mkdirSync(qrCodeDir, { recursive: true });
}
// create uploads directory if doesn't exists
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// get all resume
exports.getAllResumes = async (req, res) => {
  const resumes = await Resume.find();

  res.status(200).json({
    success: true,
    resumes
  });
}

// get resume by id
exports.getResumeById = async (req, res) => {
  try {
    const resume = await Resume.findById(req.params.id);

    if (!resume) {
      res.status(400).json({
        success: false,
        message: "Resume Not Found"
      });
      return;
    }

    res.status(200).json({
      success: true,
      resume
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Resume Not Found"
    })
  }
}

// get all public resumes / templates
exports.getAllTemplates = async (req, res) => {
  const resumes = await Resume.find({ visibility: "public" });

  res.status(200).json({
    success: true,
    resumes
  });
}

// get user's resumes
exports.getUserResumes = async (req, res) => {
  const userId = req.params.userid;
  const user = await User.findById(userId);

  if (!user) {
    return res.status(500).json({
      success: false,
      message: "User not found"
    })
  }
  const resumes = await Resume.find({ ownerId: userId });

  res.status(200).json({
    success: true,
    resumes
  })
}

function generateQrCode(id, ownerUserName) {
  const path = `${qrCodeDir}/${id}.png`;
  const link = `${clientUrl}/${ownerUserName}/${id}`;
  QRCode.toFile(path, link);
  return `${id}.png`;
}

// save resume
exports.saveResume = async (req, res) => {
  const { ...body } = req.body;

  if (req.params.id === "-1") {
    // create new
    const newResume = await Resume(body);
    const qrCode = generateQrCode(newResume.id, newResume.ownerUserName);
    newResume.qrCode = qrCode;
    await newResume.save();

    res.status(201).json({
      success: true,
      resume: newResume
    })
    return;
  }

  const resume = await Resume.findById(req.params.id);

  if (!resume) {
    res.status(400).json({
      success: false,
      message: "Resume Not Found"
    })
    return;
  }

  // update
  resume.name = body.name;
  resume.elements = body.elements;
  await resume.save();

  res.status(200).json({
    success: true,
    resume
  })
}

// change visibility
exports.changeVisibility = async (req, res) => {
  const resume = await Resume.findById(req.params.id);

  if (!resume) {
    res.status(500).json({
      success: false,
      message: "Resume does not exist"
    })
    return;
  }

  resume.visibility = req.body.visibility;
  await resume.save();

  res.status(200).json({
    success: true,
    resume
  })
}

// upload photo
exports.uploadImage = async (req, res) => {
  const { elementid } = req.body;
  const { image } = req.files;
  const extension = image.name.split('.').pop();

  if (!image) return res.status(400);

  image.mv(uploadsDir + elementid + "." + extension);
  res.status(200);
}

// delete resume
exports.deleteResume = async (req, res) => {
  await Resume.findByIdAndDelete(req.params.id);

  res.status(200).json({
    success: true,
  })
}