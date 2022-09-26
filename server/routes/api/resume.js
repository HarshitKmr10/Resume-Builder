const express = require('express');
const { getAllTemplates, getUserResumes, saveResume,
  changeVisibility, getResumeById, getAllResumes, uploadImage } = require('../../controllers/resumeController');

const router = express.Router();

// get all resume
router.route("/resumes").get(getAllResumes);

// get resume by id
router.route("/resume/:id").get(getResumeById);

// get all public resumes / templates
router.route("/templates").get(getAllTemplates);

// get user's resumes
router.route("/:userid/resumes").get(getUserResumes);

// save resume
router.route("/resume/:id").post(saveResume);

// change visibility
router.route("/resume/:id/visibility").put(changeVisibility);

// upload photo
router.route("/upload").post(uploadImage);

module.exports = router;