const User = require('../models/UserSchema');
const Resume = require('../models/resumeSchema');
const QRCode = require('qrcode');
const fs = require('fs');

// create qrcode directory if doesn't exists
const qrCodeDir = `../client/public/img/qrcodes/`;
if (!fs.existsSync(qrCodeDir)) {
  fs.mkdirSync(qrCodeDir, { recursize: true });
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

function generateQrCode(id, link) {
  const path = `${qrCodeDir}/${id}.png`;
  QRCode.toFile(path, link);
  return path;
}

// save resume
exports.saveResume = async (req, res) => {
  const { link, ...body } = req.body;

  if (req.params.id === "-1") {
    // create new
    const newResume = await Resume(body);
    const qrCode = generateQrCode(newResume.id, link);
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