const mongoose = require('mongoose');

const userCredential = mongoose.Schema({
    name: String,
    password: String,
    address:String,
    image: String,
   
  
})

const UserCredential = mongoose.model('User', userCredential);
module.exports =UserCredential;