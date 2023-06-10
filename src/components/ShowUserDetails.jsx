import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
// import Title from './Title'

const ShowUserDetails = (props) => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [user, setUser] = useState([])
    // const page = "details"

    useEffect(() => {
        axios
            .get(`https://mmsbe.cyclic.app/api/${id}`)
            .then((res) => {
                setUser(res.data)
            })
            .catch((err) => {
                console.log('There was an error while trying to show details about a user')
            })
    }, [id])

    const handleDelete = (id) => {
        axios
            .delete(`https://mmsbe.cyclic.app/api/${id}`)
            .then((res) => {
                navigate('/')
            })
            .catch((err) => {
                console.log('There was an error while trying to delete a user record')
            })
    }

    const isUserAdmin = () => {
        if(user.admin === 'true') {
            return <div><strong>User Administrator</strong></div>
        }
    }

    return (
        <>
            <div className="ShowUserDetails">
                <div className="container-fluid">
                    {/* <div className="row">
                        <Title page={page} />
                    </div> */}
                    <div className="row ">
                        <div className="user-card-ui">
                            <div className="user-card-header">
                                <img src={user.img} alt={user.fname} />
                            </div>
                            <div className="user-card-body">
                                <h2>{user.fname} {user.lname}</h2>
                                <h5>Position: {user.title}</h5>
                                <div>
                                    <div>Email: {user.email}</div>
                                    <div>Phone: {user.number}</div>
                                    <div>Gender: {user.gender}</div>
                                    {isUserAdmin()}
                                </div>
                            </div>

                            <div className="controls">
                                <Link to={`/edit-user/${user._id}`} className="btn btn-outline-info btn-lg btn-block">Update User Info</Link>
                                <div className="col-md-6">
                                    <button className="btn btn-outline-danger btn-lg btn-block" onClick={() => {
                                        handleDelete(user._id)
                                    }}>Delete User</button>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShowUserDetails