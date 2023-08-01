import React, { useEffect, useState } from 'react'
import './profile.css'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
function Profile() {
    let nav = useNavigate()
    let [user, setUser] = useState({})

    const { id } = useParams();
    const divStyle = {
        width: '356px',
        height: '215px',
        border: '1px solid black',

    };
    useEffect(() => {
        axios.get(`http://localhost:5000/getuser/${id}`).then((res) => {
            console.log(res.data);
            setUser(res.data)
        })
    }, [])
    function editbtn(){
        nav(`/edit/${id}`)
    }

    return (
        <div className="card">


                <div style={divStyle}>
                    <img src={`/images/${user.image}`} alt="" style={{ width: "100%", height: "100%", objectFit: "contain" }} /></div>
                <div className="user_details ">
                    <h3>NAME - {user.name}</h3>
                    <p>ADDRESS - {user.address}</p>
                </div>
                <div className="card_count">

                    <div className="btn" onClick={editbtn}>edit</div>
                </div>
        </div>

    )
}

export default Profile
