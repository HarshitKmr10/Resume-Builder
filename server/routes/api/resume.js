const express = require('express');
const { getAllTemplates, getUserResumes, saveResume, changeVisibility } = require('../../controllers/resumeController');

const router = express.Router();

// get all public resumes / templates
router.route("/resume/templates").get(getAllTemplates);

// get user's resumes
router.route("/:userid/resumes").get(getUserResumes);

// save resume
router.route("/resume/:id").post(saveResume);

// change visibility
router.route("/resume/:id/visibility").put(changeVisibility);

module.exports = router;