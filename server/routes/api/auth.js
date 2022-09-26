const express = require('express');
const router = express.Router();
const jwtVerify = require('../../middleware/jwtVerification')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {check, validationResult} = require('express-validator')
const config = require('config')

//route GET = api/auth
const User = require('../../models/UserSchema')

router.get("/api/auth",jwtVerify, async(req, res)=>{
    try{
        const user = await User.findById(req.user.id).select("-password");
        res.json(user);
    }catch(err){
        console.log(err.message);
        res.status(500).send("Server error")
    }
});

//@route POST api/auth
router.post("/api/auth", [

     check('email', 'Please include a valid email').isEmail(),
     check('password', "Password is required").exists()
], 
async (req, res)=>{
    // let success = false;
    const error = validationResult(req);
    let success= false;
    if(!error.isEmpty()){
        return res.status(400).json({error: error.array()})
    }

    const {email, password} = req.body;

    try{
        let user = await User.findOne({email});

        if(!user){
         return res.status(400).json({error: [{msg: "Invalid Credentials"}]})
        }
        //return jsonwebtoken

        const isMatch = await bcrypt.compare(password, user.password)

        if(!isMatch){
            return res.status(400).json({ error: [{error: 'Invalid password'}]})
        }

        //making a payload
        const payload = {
            user:{
                id: user.id
            }
        };
        jwt.sign(payload,
            config.get('jwtSecret'),
            {success: true},
            {expiresIn: 360000},
            (err, token)=>{
                if(err) throw err;
                res.json({success,token});
            
            });
    }catch(err){
        console.error(error.message);
        res.status(500).send("Server error")
    }
}
)
module.exports = router;