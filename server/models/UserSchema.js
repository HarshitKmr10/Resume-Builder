const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true
  },
  email:{
    type:String,
    required: true
  },
  password:{
    type:String,
    unique: true,
    required: true
  },
  Date:{
    type: Date,
    default: Date.now
  }
})

module.exports = userSchema = mongoose.model('UserSchema', userSchema);