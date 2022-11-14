const express = require('express')
const router = express.Router();
const { check, validationResult } = require('express-validator')
const User = require('../../models/UserSchema')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')

router.post("/api/user", [

    // user input validation
    check('username', "Name is required").not().isEmpty(),
    check('email', "Email is required").isEmail(),
    check('password', "Password is required").isLength({ min: 6 }),

], async (req, res) => {

    // res.send("User route")
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(400).json({ error: error.array() });
    }

    const { email, password } = req.body;
    
    try {
        //see if the user exist or not
        const userExists = await User.findOne({ email })

        if (userExists) {
            return res.status(400).json({ sucess: false, msg: "Hey the user already exists!" })
        }

        //make a new user if it doesnt exists
        const user = await User(req.body)

        //Encrypt the user password 
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        //saving the user to the database
        await user.save()

        //return jsonwebtoken
        //making payload
        const payload = {
            user: {
                id: user.id
            }
        };

        jwt.sign(
            payload,
            config.get('jwtSecret'),
            { expiresIn: 360000 },
            (err, token) => {
                if (err) throw err;
                res.json({ success: true, token, user })
            })
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, msg: "Server Error" })
    }
});

module.exports = router