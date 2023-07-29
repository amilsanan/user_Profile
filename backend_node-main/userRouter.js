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
  const plainPassword = pass;
  const saltRounds = 10;
  var encrptedPass;
  await bcrypt.hash(plainPassword, saltRounds, (err, hash) => {
    if (err) {
      console.error(err);
    } else {
        encrptedPass = hash;
        console.log("Bcrypt hash:", encrptedPass);
    }
  });
  console.log("hi");

  // console.log(req.file);
  let data = new USER({
    name,
    password: pass,
    address,
    image: req.file.originalname,
  });
  console.log("user=", data);
  data.save();
});

module.exports = router;
