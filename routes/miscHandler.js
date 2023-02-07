const express = require("express");
const router = express.Router();


// @Route   GET Any path that has not been specified in the api
// @Desc    Default handler for wrong paths
// @Access  Public

// Needs to be changed to a proper error page
router.get("/*", (req, res, next) => {
    res.status(404).redirect("/auth/test");
    res.next()
})

module.exports = router;