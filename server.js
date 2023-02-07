require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

// ------ Import the routes to be used ------
const auth = require("./routes/auth");
const miscHandler = require("./routes/miscHandler");


mongoose.set("strictQuery", false); // Set query to stop the deprecation warning

const app = express(); // Create the express application

// ------ Middleware to be used ------
app.use(express.static("htmls"));
app.use(express.static("images"));
app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());


// ------ @Routes ------
app.use("/auth", auth);
app.use("/", miscHandler);



// First connect to the database and since it returns a promise if its successfully connected then start the server
mongoose.connect(process.env.URI).then( async () =>{
    console.log("Connected to the databse");

    app.listen(process.env.PORT, () => {
        console.log(`Server started at port ${process.env.PORT}`);
    });
}).catch((error) => {
    console.log("An error has been encountered ", error);
})