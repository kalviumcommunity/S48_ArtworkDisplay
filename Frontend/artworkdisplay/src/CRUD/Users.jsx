import React from "react"
import './CRUD.css'
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"


function Users(){
    const [users, setUsers] = useState([]) 

    useEffect(() => {
        axios.get("http://localhost:3001/getUser")
        .then(res => setUsers(res.data))
        .catch(err => console.log(err))
    }, [])

    const handleDelete = (id) =>{
        axios.delete("http://localhost:3001/deleteUser/"+id)
        .then(res => {
            console.log(res)
            window.location.reload()
        })
        .catch(err => console.log(err))
    }

    return(
        <>
            <div className="addContainer">
                <Link to="/create">
                    <button id="addButton">Add +</button>
                </Link>
                <div className="crudUserContainer">
                    <table>
                        <thead>
                            <tr>
                                <th className="tablecontent">Name</th>
                                <th className="tablecontent">Email</th>
                                <th className="tablecontent">Age</th>
                                <th className="tablecontent" colSpan="2" >Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users && users.map((user, idex) => {
                                    return  (<tr key={idex}>
                                        <td className="tablecontent">{user.name}</td>
                                        <td className="tablecontent">{user.email}</td>
                                        <td className="tablecontent">{user.age}</td>
                                        <td className="tablecontent">
                                        <Link to={`/update/${user._id}`} ><button className="actionButton">Update</button></Link>
                                        </td>
                                        <td className="tablecontent">
                                            <button className="actionButton" onClick={(e)=> handleDelete(user._id)}>Delete</button>
                                        </td>
                                    </tr>)
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>    
        </>
    )
}

export default Users