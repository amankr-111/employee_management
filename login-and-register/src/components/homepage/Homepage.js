import React from 'react'
import { useLocation } from 'react-router-dom'
import './homepage.css'

const Homepage = () => {
  const location = useLocation()
  const user = location.state?.user

  return (
    <div className='homepage'>
      <h1>Hello homepage</h1>
      {user && (
        <div>
          <p>User ID: {user._id}</p>
          <p>Name: {user.fname} {user.lname}</p>
          <p>Email: {user.email}</p>
          <p>Gender: {user.gender}</p>
          <p>Hobbies: {user.hobbies}</p>
          <p>Category: {user.category}</p>
          <p>Department: {user.department}</p>
          <p>Location: {user.location}</p>
          <p>Salary: {user.salary}</p>
        </div>
      )}
      <div className='button'>Logout</div>
    </div>
  )
}

export default Homepage
