import axios from 'axios';
import '../App.css'
import {Link } from 'react-router-dom';
import React, { useState } from 'react';

export default function List() {

    const [firstname ,setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    

    const adddata = () => {
        
        let datastring = {firstname:firstname,lastname:lastname,email:email};
        axios.post("http://localhost:3004/add",datastring)
        .then(function(response){
            if(response.data.status === 'inserted'){
                alert('inserted');
                window.location.reload();
            }
        });
    };
    
return(
    <>
    <div className="container mt-3">
    <div className="row">
        <p className="p_style">CRUD Application - Add</p>
    </div>
    </div>

    <div className="container mt-5">
        <div className="data_center_0">
        <div className="form-group">
        <label>Firstname</label>
        <input type="text" className="form-control" onChange={(e)=> setFirstname(e.target.value)} />
        </div>
        <div className="form-group">
        <label>Lastname</label>
        <input type="text"  className="form-control" onChange={(e)=> setLastname(e.target.value)}/>
        </div>
        <div className="form-group">
        <label>Email Id</label>
        <input type="email"  className="form-control" onChange={(e)=> setEmail(e.target.value)}/>
        </div>
        <div className="form-group">
        <button className="btn btn-primary mt-4" onClick={adddata}>Save</button>&nbsp;
        <Link to={"/"}><button className="btn btn-danger mt-4">Go Back</button></Link>
        </div>
        </div>
    </div>
    </>
)

}