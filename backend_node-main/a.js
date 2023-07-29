
try {
      let { data } = await axios.post("/api/booking/amil", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
const formData = new FormData();
    formData.append("image", selectedFile);

//backend
const storage = multer.diskStorage({
    destination: './uploads/',
    filename: function (req, file, cb) {
      cb(
        null,
        file.fieldname + '-' + Date.now() + path.extname(file.originalname)
      );
    },
  });
  
  // Initialize the multer middleware
  const upload = multer({ storage });
  Router.route('/amil').post(upload.single('image'),Amil)