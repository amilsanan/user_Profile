import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
// import im from './images/'

function Edit() {
    let [user, setUser] = useState({})
    const { id } = useParams();
    let nav = useNavigate();
    useEffect(() => {
        axios.get(`http://localhost:5000/getuser/${id}`).then((res) => {
            console.log(res.data);
            setUser(res.data)
        })
    }, [])

    const [name, setName] = useState(user.name);
    // const [password, setPassword] = useState(use);
    const [image, setImage] = useState("");
    const [address, setAddress] = useState(user.address);
    const [preview, setPreview] = useState("");
    // const [valid, setvalid] = useState(false);
  
    const divStyle = {
      width: "300px",
      height: "200px",
      border: "1px solid black",
    };
  
    const handleUpload = (event) => {
      const file = event.target.files[0];
      const objectUrl = URL.createObjectURL(file);
      setPreview(objectUrl);
      setImage(file);
    };
  
    async function submit(e) {
      e.preventDefault();     
  
      const formData = new FormData();
      formData.append("image", image);
      formData.append("name", name);
      formData.append("address", address);
      formData.append("pass", password);
  
      axios.post("http://localhost:5000/register", formData)
        .then((response) => {
          console.log(response.data);
          if(response.data){
            nav('/login')
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  return (
    <div>
      <section className="vh-100">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100 mt-5">
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              {/* Email input */}
              <div className="form-outline mb-4">
                <input
                  type="email"
                  value={user.name}
                  onChange={(e) => setName(e.target.value)}
                  id="form3Example3"
                  className="form-control form-control-lg"
                  placeholder="Enter your name"
                />
                <label className="form-label" htmlFor="form3Example3">
                  name
                </label>
              </div>
              <div className="form-outline mb-4">
                {/* <input
                  type="email"
                  value={user.password}
                  onChange={(e) => setPassword(e.target.value)}
                  id="form3Example3"
                  className="form-control form-control-lg"
                  placeholder="Enter a password"
                /> */}
                <label className="form-label" htmlFor="form3Example3" style={{color:"red"}}>
                  cannot change password
                </label>
                <br />
                
              </div>
              <div className="form-outline mb-4">
                <input
                  type="email"
                  value={user.address}
                  onChange={(e) => setAddress(e.target.value)}
                  id="form3Example3"
                  className="form-control form-control-lg"
                  placeholder="Enter a valid address"
                />
                <label className="form-label" htmlFor="form3Example3">
                  address
                </label>
              </div>
              <div className="form-outline mb-4">
                <input
                  type="file"
                  onChange={handleUpload}
                  id="form3Example const divStyle = {
    width: '300px', // Set your desired width
    height: '200px', // Set your desired height
    border: '1px solid black', // Optional: Adding a border to visualize the div
  };3"
                  className="form-control form-control-lg"
                  placeholder="Enter a valid email address"
                />
                <label className="form-label" htmlFor="form3Example3">
                  add image
                </label>
                <div style={divStyle}>
                  <img
                    className="previewImage"
                    style={{ width: "100%", height: "100%", objectFit: "fit" }}
                    src={preview}
                    alt="preview"
                  />
                </div>
              </div>
              {/* Password input */}

              <div className="text-center text-lg-start mt-4 pt-2">
                <button
                  type="button"
                  className="btn btn-primary btn-lg"
                  style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                  onClick={submit}
                >
                  register
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Edit
