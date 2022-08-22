import axios from 'axios';
import '../App.css'
import {Link} from 'react-router-dom';
import React, { useState,useEffect } from 'react';

export default function List() {

    const [studentdetails, setStudentdetails] = useState([]);

    useEffect(()=>{
        getStudents();
    },[]);

    const getStudents = async() => {
        const response = await axios.get("http://localhost:3004/");
        setStudentdetails(response.data);
    }

    const deleteStudent = async(id) => {
        await axios.delete(`http://localhost:3004/delete/`+id);
        getStudents();
    }

return(
    <>
    <div className="container mt-3">
    <div className="row">
        <p className="p_style">CRUD Application</p>
    </div>
    </div>

    <div className="container mt-3">
    <div className="row">
        <Link to={"/add"}>
        <button className="btn btn-success">Add Student</button>
        </Link>
    </div>
    </div>

    <div className="container mt-5">
    <div className="table-responsive">
        <table className="table table-bordered table-hover">
            <thead>
                <tr>
                    <th>Sl.No</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email ID</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
            { studentdetails.map((student, index) => (
                <tr key={student.id}>
                    <td>{student.id}</td>
                    <td>{student.firstname}</td>
                    <td>{student.lastname}</td>
                    <td>{student.email}</td>
                    <td>
                        <Link to={"/update/"+student.id}>
                        <button className="btn btn-primary">
                            Update
                        </button></Link>&nbsp;
                        <button className="btn btn-danger"
                        onClick={()=>deleteStudent(student.id)}>
                            Delete
                        </button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
    </div>
    </>
)

}