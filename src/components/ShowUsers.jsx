import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { UserItem } from './UserItem'
import { Loader } from './Loader'

export const ShowUsers = () => {

  const [users, setUsers] = useState([])

  const userList = 
  users.length === 0 ? <Loader /> : <UserItem users={users}/>
  
  useEffect(() => {
      axios.get('https://mmsbe.cyclic.app/api/')
      .then((res) => {
        setUsers(res.data)
      })
      .catch((err) => {
        console.log('Error occurred while fetching user data', err)
      })
  }, [])



  return (
    <div className="user-list">
      <h1>User Directory</h1>
      <p>Efficiently manage user records with our comprehensive listing</p>
      <ul>
        { userList }
      </ul>
    </div>
  )
}
