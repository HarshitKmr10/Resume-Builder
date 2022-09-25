const mongoose = require('mongoose')
const config = require('config')
const db = config.get('mongoURI')

//function to connect with database
const connectDB = async () => {

    try{
        await mongoose.connect(db, {
            useNewUrlParser: true
        }); //connected the mongoose through the database

        console.log('Connected to the database')
    }catch(err){
        console.log(err.message);
        //process exit with failure
        process.exit(1);
    }
}

module.exports = connectDB;