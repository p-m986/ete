const express = require("express");
const User = require("../models/user");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const validateRegisterInput = require("../validation/registerValidatation");
const requiresAuth = require("../middleware/permissions");


//  @route      POST /auth/test
//  @Desc       Testing Route
//  @Access     Public

router.get("/test", (req, res) => {
    res.send("Works").status(200);
});



//  @route      POST /auth/register
//  @Desc       Register new user to the databse.
//              Data to be provided in the request
//              email           -> Required, Unique
//              name            -> Required
//              password        -> Required
//              confirmpassword -> Required
//  @Access      Public

router.post("/register", async (req, res) => {
    try{

        const {errors, isValid} = validateRegisterInput(req.body);

        if(!isValid){
            res.status(400).json(errors);
            return;
        }

        const exsistingEmail = await User.findOne({
            email: new RegExp("^" + req.body.email + "$", "i")
        });

        if(exsistingEmail){
            return res.status(400).send("Email already exsists");
        }

        const hashedpassword = await bcrypt.hash(req.body.password, 12);

        const newUser = new User({
            email: req.body.email,
            name: req.body.name,
            password: hashedpassword,
        });

        const savedUser = await newUser.save();

        const updatedSavedUser = {...savedUser._doc};
        delete updatedSavedUser.password;
        

        res.status(200).json(updatedSavedUser);
    }
    catch(err){
        res.status(500).send(err.message);
    }
})



//  @route      POST /auth/login
//  Desc        Validate the login details from the database and setup a validation token
//              Data to be provided in the request
//              email           -> Required, Unique
//              password        -> Required
//  Access      Public

router.post("/login", async(req, res) => {
    try{
        // check for username in the database
        const user = await User.findOne({
            email: new RegExp("^" + req.body.email + "$", "i")
        });
        // If user could not be found
        if(!user){
            return res.status(400).json({error: "There is an error with the login credentials"});
        }

        // check the password if the user exsists
        const passwordMatch = await bcrypt.compare(req.body.password, user.password);
        if(!passwordMatch){
            return res.status(400).json({error: "There is an error with the login credentials"});
        }

        const payload = { userId : user._id };
        const token = jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: "2d"
        });

        res.cookie("access-token", token, {
            expires: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
            httpOnly : true,
            secure : process.env.NODE_ENV === "production"
        });

        const userToReturn = {...user._doc};
        delete userToReturn.password;

        return res.json({
            token : token,
            user : userToReturn
        });

    }
    catch(err){
        res.status(500).send(err.message);
    }
})


//  @route      POST /auth/current
//  Desc        Test Route to test user authorization
//  Access      Private

router.get("/current", requiresAuth, async (req, res) => {
    if(!req.user){
        return res.status(401).json({ authority :"Unauthorized"});
    }
    return res.status(200).json({ User : req.user});
})

module.exports = router;