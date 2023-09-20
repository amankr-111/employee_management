import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import './Update.css'
const Update = () => {
  const location = useLocation();
  const userId = location.state?.userId;
  const [userData, setUserData] = useState({});
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    gender: '',
    hobbies: '',
    category: '',
    department: '',
    location: '',
    salary: '',
  });
  const [updatedData, setUpdatedData] = useState({
    fname: '',
    lname: '',
    email: '',
    gender: '',
    hobbies: '',
  });

  

  useEffect(() => {
    const fetchData = async () => {
      if (userId) {
        try {
          const response = await axios.get(`http://localhost:9002/update/${userId}`);
          setUserData(response.data);
  
          // Set formData with mainData values if mainData is available
          if (response.data && response.data.user) {
            const { fname, lname, email, gender, hobbies, category, department, location, salary } = response.data.user;
            setFormData({
              fname: fname || '',
              lname: lname || '',
              email: email || '',
              gender: gender || '',
              hobbies: hobbies || '',
              category: category || '',
              department: department || '',
              location: location || '',
              salary: salary || '',
            });
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };
  
    fetchData();
  }, [userId, setFormData]);
const mainData=userData.user
console.log(mainData)

const handleFormSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post(`http://localhost:9002/update/${userId}`, formData);
    console.log(response.data); 
  } catch (error) {
    console.error("Error updating data:", error);
  }
};


const handleInputChange = (e) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
};
  return (
  <>
  <form method='POST' onSubmit={handleFormSubmit} className='pranav'>
  <div className='form-item'>
    <label htmlFor='employeeName'>Employee ID:</label>
    <label htmlFor='employeeName'>{userId}</label>
    <input type='text' name='_id' value={userId}/>
    </div>
    <br />
  <div className='form-item'>
          <label htmlFor='employeeName'>Employee email:</label>
          {mainData ? (
            <>
              <label htmlFor='employeeName'>{mainData.email}</label>
              <input
                type="email"
                name="email"
                onChange={handleInputChange}
              />
            </>
          ) : null}
        </div>
        <br />
        <div className='form-item'>
  <label htmlFor='employeeName'>Employee First Name:</label>
  {mainData ? (
    <span>{mainData.fname}</span>
  ) : null}
</div>
<br />
<div className='form-item'>
  <label htmlFor='employeeName'>Employee Last Name:</label>
  {mainData ? (
    <span>{mainData.lname}</span>
  ) : null}
</div>
<br />

        <br />
  <div className='form-item'>
          <label htmlFor='employeeName'>Employee Gender:</label>
          {mainData ? (
            <>
              <label htmlFor='employeeName'>{mainData.gender}</label>
              <input
                type="text"
                name="gender"
                onChange={handleInputChange}
              />
            </>
          ) : null}
        </div>
        <br />
  <div className='form-item'>
          <label htmlFor='employeeName'>Employee Hobbies:</label>
          {mainData ? (
            <>
              <label htmlFor='employeeName'>{mainData.hobbies}</label>
              <input
                type="text"
                name="hobbies"
                onChange={handleInputChange}
              />
            </>
          ) : null}
        </div>
        <br />
  <div className='form-item'>
          <label htmlFor='employeeName'>Employee Category:</label>
          {mainData ? (
            <>
              <label htmlFor='employeeName'>{mainData.category || "Please Assign"}</label>
              <input
                type="text"
                name="category"
                onChange={handleInputChange}
              />
            </>
          ) : null}
        </div>
        <br />
  <div className='form-item'>
          <label htmlFor='employeeName'>Employee Department:</label>
          {mainData ? (
            <>
              <label htmlFor='employeeName'>{mainData.department || "Please Assign"}</label>
              <input
                type="text"
                name="department"
                onChange={handleInputChange}
              />
            </>
          ) : null}
        </div>
        <br />
  <div className='form-item'>
          <label htmlFor='employeeName'>Employee Location:</label>
          {mainData ? (
            <>
              <label htmlFor='employeeName'>{mainData.location || "Please Assign"}</label>
              <input
                type="text"
                name="location"
                onChange={handleInputChange}
              />
            </>
          ) : null}
        </div>
        <br />
  <div className='form-item'>
          <label htmlFor='employeeName'>Employee Salary:</label>
          {mainData ? (
            <>
              <label htmlFor='employeeName'>{mainData.salary || "Please Assign"}</label>
              <input
                type="number"
                name="salary"
                onChange={handleInputChange}
              />
            </>
          ) : null}
        </div>
<br />
    <input type='submit'/>

  </form>
  </>
  );
};

export default Update;
