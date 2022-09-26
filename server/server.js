const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors')
const config = require('config');
const fileUpload = require('express-fileupload');

const app = express();

const corsOptions = {
    origin : '*',
    credentials: true,
    optionSuccessStatus: 200
}

//connecting to the database
connectDB()

const clientUrl = config.get("clientURL");

app.use(cors({
  origin: clientUrl,
  optionSuccessStatus: 200
}))

//Init middleware
app.use(express.json({extended: false}));
app.use(fileUpload());

//cors 
app.use(cors(corsOptions))

app.get("/", (req, res)=> console.log("API running"))

//Defining the routes here
app.post("/api/user", require('./routes/api/user'));

app.post("/api/auth", require('./routes/api/auth'));

app.use("/api/", require('./routes/api/resume'));


const PORT = process.env.PORT || 3030;

//listen
app.listen(PORT, ()=> console.log(`Server running on the port ${PORT}`))