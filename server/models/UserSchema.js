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
  },
   workExperience: [ 
      {   
          designation: {
              type: String,
              required: true
          },
          company:{
              type:String,
              required: true
          },
          from:{
              type:Date,
          },    
          description:{
              type:String
          }
      }
    ],
   education: [
    {
      name:{
        type: String,
        required: true
      },
      degree:{
        type: String,
        required: true
      },
      grade:{
        type: String,
        required: true
      }, 
      year:{
       type: Date,
       required: true
      },
    }
   ],
   projects: [
    {
    title:{
      type: String,
      required: true
    },
    detail:{
      type: String,
      required:true
    }
  }
],
skills:[
  {
  title:{
    type:String,
    required: true
  }
}
]
})

module.exports = User = mongoose.model('UserSchema', userSchema);