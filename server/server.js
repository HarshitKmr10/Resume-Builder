const express = require('express');
const connectDB = require('./config/db');
const app = express();
const cors = require('cors')
const corsOptions = {
    origin : '*',
    credentials: true,
    optionSuccessStatus: 200
}

//connecting to the database
connectDB()

//Init middleware
app.use(express.json({extended: false}));

//cors 
app.use(cors(corsOptions))

app.get("/", (req, res)=> console.log("API running"))

//Defining the routes here
app.get("/api/user", require('./routes/api/user'));

app.post("/api/auth", require('./routes/api/auth'));

app.use("/api/", require('./routes/api/resume'));


const PORT = process.env.PORT || 3030;

//listen
app.listen(PORT, ()=> console.log(`Server running on the port ${PORT}`))