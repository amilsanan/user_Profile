import React, { useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";

function SingleProduct() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    setSelectedImage(e.target.files[0]);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append("image", selectedImage);

    axios.post("http://localhost:5000/register", formData)
      .then((response) => {
        // Handle the response from the server if needed
        console.log(response.data);
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });
  };

  return (
    <div>
      <input type="file" onChange={handleImageChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default SingleProduct;
