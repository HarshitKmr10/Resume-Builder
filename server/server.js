const express = require('express');
const connectDB = require('./config/db');
const app = express();

//connecting to the database
connectDB()

//Init middleware
app.use(express.json({extended: false}));

app.get("/", (req, res)=> console.log("API running"))

//Defining the routes here
app.get("/api/user", require('./routes/api/user'));
app.get("/api/auth", require('./routes/api/auth'));

const PORT = process.env.PORT || 3000;

//listen
app.listen(PORT, ()=> console.log(`Server running on the port ${PORT}`))