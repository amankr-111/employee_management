import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './man.css'
const ManagerHome = () => {
  const [userData, setUserData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:9002/users');
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleButtonClick = (userId) => {
    navigate('/update', { state: { userId } });
  };
  
  const handleDeleteClick = async (userId) => {
    try {
      await axios.delete(`http://localhost:9002/users/${userId}`);
      setUserData((prevData) => prevData.filter((user) => user._id !== userId));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div className='harsh'>
    <h1>Welcome to the Dashboard</h1>
    <p>Here are the Employee Details</p>
   <center> <table border={9} cellPadding={17}>
        <tr>
            <th>Employee ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Hobbies</th>
            <th>Category Name</th>
            <th>Department Name</th>
            <th>Location</th>
            <th>Salary</th>
            <th>Update details</th>
        </tr>
        {userData.map((user) => (
  <tr>
  <td>{user._id}</td>
  <td>{user.fname}</td>
  <td>{user.lname}</td>
  <td>{user.gender}</td>
  <td>{user.email}</td>
  <td>{user.hobbies}</td>
  <td>{user.category || "Please  Update"}</td>
  <td>{user.department || "Please  Update"}</td>
  <td>{user.location || "Please  Update"}</td>
  <td>{user.salary || "Please  Update"}</td>
  <td><button onClick={() => handleButtonClick(user._id)}>Click to Update</button></td>
  <td><button onClick={()=>handleDeleteClick(user._id)}>Delete</button></td>
  </tr>
))}
        
    </table></center>
</div>
  );
};

export default ManagerHome;

