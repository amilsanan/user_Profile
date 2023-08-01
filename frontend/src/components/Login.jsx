import axios from 'axios';
import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

function Login() {
    let nav = useNavigate()
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    let data={
        name,
        password
    }

    function submit(e){
        e.preventDefault();
        console.log(data);
        // console.log(e);
        axios.post("http://localhost:5000/login",data).then((res)=>{
            console.log(res.data);
            if(res.data.meassage==true){
                nav(`/profile/${res.data.id}`)
            }
        })
    }
    

  return (
    <div>
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
              placeholder="Enter your name"
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
              placeholder="Enter a password"
            />
            <label className="form-label" htmlFor="form3Example3">
              password
            </label>
            <br />
            
          </div>
          
         

          <div className="text-center text-lg-start mt-4 pt-2">
            <button
              type="button"
              className="btn btn-primary btn-lg"
              style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
              onClick={submit} >
              Login
            </button>
            
          </div>
        
      </div>
    </div>
  </div>
  
</section>
    </div>
  )
}

export default Login
