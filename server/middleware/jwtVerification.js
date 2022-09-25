const jwt = require('jsonwebtoken')
const config = require('config')

module.exports = function(req, res, next){

    //get the token from header
    const token = req.header('auth-token')

    //check if not the token
    if(!token){
        return res.status(401).json({msg: "No token, authrization denied"})
    }

    //verifying the token
    try{
        const decoded = jwt.verify(token, config.get('jwtSecret'))
        req.user = decoded.user;
        next();
    }catch(err){
        res.status(401).json({msg: 'Oops! token got failed.'})
    }
}