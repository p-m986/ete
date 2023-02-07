const express = require("express");
const router = express.Router();
const isEmpty = require("../validation/isEmpty");

router.get("/store/:productId", async (req, res) => {
    try{
        let product = req.params.productId;
        
    } catch (err){
        console.log(err);
        res.status(500).send(err.message);
    }
})