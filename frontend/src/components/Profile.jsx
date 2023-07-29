import React from 'react'
import './profile.css'
function Profile() {
    const divStyle = {
    width: '356px', 
    height: '215px', 
    border: '1px solid black', 
    
  };
    
  return (
    <div className="card">
  <div className="card_background_img" />
  <div className="card_profile_img" />
  <div style={divStyle}>
  <img src="images/a.jpg" alt="" style={{ width: "100%", height: "100%", objectFit: "contain" }} /></div>
  <div className="user_details ">
    <h3>Gordon Ramsay</h3>
    <p>Master Chef</p>
  </div>
  <div className="card_count">
    
    <div className="btn">edit</div>
  </div>
</div>

  )
}

export default Profile
