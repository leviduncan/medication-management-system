import React from 'react'
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
        </li>
      ))}
    </>
  )
}
