const mongoose = require('mongoose')

const resumeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  createdDate: {
    type: Date,
    default: Date.now(),
  },
  ownerId: {
    type: String,
    required: true,
  },
  ownerUserName: {
    type: String,
    required: true,
  },
  visibility: {
    type: String,
    default: "private"
  },
  rating: {
    type: Number,
    default: 0,
  },
  qrCode: {
    type: String,
    default: "",
  },
  elements: {
    type: Array,
    default: [],
  }
})

module.exports = Resume = mongoose.model('Resume', resumeSchema);