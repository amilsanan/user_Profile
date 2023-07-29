import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    let nav = useNavigate()
    const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");
  const [address, setAddress] = useState("");

  const handleUpload = (event) => {
    const file = event.target.files[0];
    const objectUrl = URL.createObjectURL(file);
    setImage(objectUrl);
  };


  function validateForm() {
    if (name.length == 0) {
      alert('Invalid Form, Name can not be empty')
      return
    }
    if (email.length == 0) {
      alert('Invalid Form, Email Address can not be empty')
      return
    }
    if (password.length < 8) {
      alert(
        'Invalid Form, Password must contain greater than or equal to 8 characters.',
      )
      return
    }

    let countUpperCase = 0
    let countLowerCase = 0
    let countDigit = 0
    let countSpecialCharacters = 0

    for (let i = 0; i < password.length; i++) {
      const specialChars = [
        '!',
        '@',
        '#',
        '$',
        '%',
        '^',
        '&',
        '*',
        '(',
        ')',
        '_',
        '-',
        '+',
        '=',
        '[',
        '{',
        ']',
        '}',
        ':',
        ';',
        '<',
        '>',
      ]

      if (specialChars.includes(password[i])) {
        countSpecialCharacters++
      } else if (!isNaN(password[i] * 1)) {
        countDigit++
      } else {
        if (password[i] == password[i].toUpperCase()) {
          countUpperCase++
        }
        if (password[i] == password[i].toLowerCase()) {
          countLowerCase++
        }
      }
    }

    if (countLowerCase == 0) {
      // invalid form, 0 lowercase characters
      alert('Invalid Form, 0 lower case characters in password')
      return
    }

    if (countUpperCase == 0) {
      // invalid form, 0 upper case characters
      alert('Invalid Form, 0 upper case characters in password')
      return
    }

    if (countDigit == 0) {
      // invalid form, 0 digit characters
      alert('Invalid Form, 0 digit characters in password')
      return
    }

    if (countSpecialCharacters == 0) {
      // invalid form, 0 special characters characters
      alert('Invalid Form, 0 special characters in password')
      return
    }
    alert('Form is valid')
  }

  return <div >
    <section className="vh-100" >
  <div className="container-fluid h-custom">
    <div className="row d-flex justify-content-center align-items-center h-100 mt-5">
      
      <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        
          
          {/* Email input */}
          <div className="form-outline mb-4">
            <input
              type="email"
              onChange={(e) => setName(e.target.value)}
              id="form3Example3"
              className="form-control form-control-lg"
              placeholder="Enter a valid email address"
            />
            <label className="form-label" htmlFor="form3Example3">
              name
            </label>
          </div>
          <div className="form-outline mb-4">
            <input
              type="email"
              onChange={(e) => setPassword(e.target.value)}
              id="form3Example3"
              className="form-control form-control-lg"
              placeholder="Enter a valid email address"
            />
            <label className="form-label" htmlFor="form3Example3">
              password
            </label>
          </div>
          <div className="form-outline mb-4">
            <input
              type="email"
              onChange={(e) => setAddress(e.target.value)}
              id="form3Example3"
              className="form-control form-control-lg"
              placeholder="Enter a valid email address"
            />
            <label className="form-label" htmlFor="form3Example3">
              address
            </label>
          </div>
          <div className="form-outline mb-4">
            <input
              type="file"
              onChange={handleUpload}
              id="form3Example3"
              className="form-control form-control-lg"
              placeholder="Enter a valid email address"
            />
            <label className="form-label" htmlFor="form3Example3">
              image
            </label>
          </div>
          {/* Password input */}
         

          <div className="text-center text-lg-start mt-4 pt-2">
            <button
              type="button"
              className="btn btn-primary btn-lg"
              style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
              onClick={() => { validateForm() }} >
              register
            </button>
            
          </div>
        
      </div>
    </div>
  </div>
  
</section>

  </div>;
}

export default Login;
