import React from 'react'

export const Loader = () => {
  return (
    <>
      Loading...
      <li className="userList">
        <div className="img skeleton"></div>
        <div className="user-info">
          <div className=" skeleton skeleton-text"></div>
          <div className=" skeleton skeleton-text"></div>
        </div>
      </li>
    </>
  )
}
