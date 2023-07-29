const express = require('express');
const router = express.Router();

const USER = require('./userCredentialModel')


router.get("/",(req,res)=>{
    res.send("hi")
})

module.exports = router;