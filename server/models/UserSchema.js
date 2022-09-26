const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    unique: true,
    required: true
  },
  Date: {
    type: Date,
    default: Date.now()
  },
  workExperience: [
    {
      designation: {
        type: String,
      },
      company: {
        type: String,
      },
      from: {
        type: Date,
      },
      description: {
        type: String
      }
    }
  ],
  education: [
    {
      name: {
        type: String,
      },
      degree: {
        type: String,
      },
      grade: {
        type: String,
      },
      year: {
        type: Date,
      },
    }
  ],
  projects: [
    {
      title: {
        type: String,
      },
      detail: {
        type: String,
      }
    }
  ],
  skills: {
    type: Array
  }
})

module.exports = mongoose.model('User', userSchema);