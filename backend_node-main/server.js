const express = require("express");
const app = express();
const cors = require('cors')
const db = require('./db');
const bodyParser = require("body-parser");

app.use(cors())
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }))

const userrouter = require('./userRouter');

db(()=>{
    try {
        console.log("DataBase Successfully Connected");        
    } catch (error) {
        console.log("Database Not Connected : ", error);    
    }});
    
    app.use('/',userrouter);
    
    const PORT = 5000;
    app.listen(PORT,()=> console.log("server Started @ 5000 "));
