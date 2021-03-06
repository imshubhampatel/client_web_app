require("dotenv").config();
const express = require('express');
const session = require("express-session");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require('body-parser');
const passport = require('passport');
const passportJWT = require("./config/passport_jwt_strategy");

// setting up database
const app = express();
const db = require('./config/mongoose');

// setting up bodyParser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json({type: 'application/x-www-form-urlencoded'}));
app.use(cookieParser());
app.use(cors());

// setting up passport 

app.use(passport.initialize());
app.use(passport.session());


// setting up routers
app.use("/", require("./routes"));


//setting up port 

const PORT = process.env.PORT || 5000;
app.listen(PORT, (err) => {
    if (err) {console.log(err);}
    console.log(`sever is running on ${PORT} successfully :) `);
});