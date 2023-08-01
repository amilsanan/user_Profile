const express = require("express");
const path = require("path");
const multer = require("multer");
const router = express.Router();
const bcrypt = require("bcrypt");

const USER = require("./userCredentialModel");

router.get("/", (req, res) => {
  res.send("hi");
});

const storage = multer.diskStorage({
  destination: "../frontend/public/images",
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });

router.route("/register").post(upload.single("image"), async(req, res) => {
  console.log("sfdsadasdf");
  let { name, address, pass } = req.body;
  console.log(name);
//   const plainPassword = pass;
//   const saltRounds = 10;
//   var encrptedPass;
  const hashedPassword = await bcrypt.hash(pass, 10);
//   await bcrypt.hash(plainPassword, saltRounds, (err, hash) => {
//     if (err) {
//       console.error(err);
//     } else {
//         encrptedPass = hash;
//         console.log("Bcrypt hash:", encrptedPass);
//     }
//   });
  console.log("hi");

  // console.log(req.file);
  let data = new USER({
    name,
    password: hashedPassword,
    address,
    image: req.file.originalname,
  });
  console.log("user=", data);
  data.save();
  res.send(true)
});

router.post("/login", async(req, res) => {
    console.log('body=',req.body); 
    let data=await USER.findOne({name:req.body.name})
    console.log("database",data); 
    try {
        if(data !=null){
            const validPassword = await bcrypt.compare(req.body.password,data.password);
            console.log('valis=',validPassword);
            if (validPassword) {
                console.log("right pass");
                res.json({meassage:true,id:data._id})
            }else{  
                console.log("wrong ");
            } 
        }else{
            res.send(false)
        } 
    } catch (error) {
        
    }
    // res.send(false)
    // console.log(data);
  });

  router.get("/getuser/:id", async(req, res) => {
      console.log(req.params);
      let id =req.params.id
      let data = await USER.findOne({_id:id})
      console.log(data);
      res.json(data)
  });
  

module.exports = router;
