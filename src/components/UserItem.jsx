import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillEdit } from 'react-icons/ai';
// import { Stack, Skeleton } from '@mui/material'

export const UserItem = (props) => {
  const { users } = props
  return (
    <>
    
    
      {users.map((user) => (
        <li key={user._id}>
          <img src={user.img} alt={user.fname} className="img"/>
          <div className="user-info">
            <p className="fullname">{user.fname} {user.lname}</p>
            <p className="email">{user.email}</p>
          </div>
          <div>
          <Link to={`/show-user/${user._id}`}><AiFillEdit/></Link>
          </div>
        </li>
      ))}
    </>
  )
}
