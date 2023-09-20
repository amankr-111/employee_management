import React,{useState} from 'react'
import './register.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Register = () => {
  const[user,setUser]=useState({
    fname:"",
    lname:"",
    gender:"",
    hobbies:"",
    email:"",
    password:"",
    reEnterPassword:""
  })
  const navigate=useNavigate()

  const handlechange=e=>{
    const{name,value}=e.target
    console.log(name,value)
    setUser({
      ...user,
      [name]:value
    })
  }
  const register=()=>{
    const {fname,lname,gender,hobbies,email,password,reEnterPassword}=user
    if(fname &&lname && gender && hobbies && email && password &&(password===reEnterPassword)){
    
    axios.post("http://localhost:9002/register",user)
    .then(res=>{alert(res.data.message)
    navigate("/login")})
    }else{
      alert('invalid input')
    }

  }
return (
    <div className='register'>
      
    <h1>Register</h1>
    <input type='text' name='fname' value={user.fname} placeholder='First Name' onChange={handlechange}></input>
    <input type='text' name='lname' value={user.lname} placeholder='Last Name' onChange={handlechange}></input>
    <input type='email' name='email' value={user.email} placeholder='Your Email' onChange={handlechange}></input>
    <input type='email' name='gender' value={user.gender} placeholder='Your Gender' onChange={handlechange}></input>
    <input type='email' name='hobbies' value={user.hobbies} placeholder='Your Hobbies' onChange={handlechange}></input>
    <input type='password' name='password' value={user.password} placeholder='Enter your password' onChange={handlechange}></input>
    <input type='password' name='reEnterPassword' value={user.reEnterPassword} placeholder='Re-enter Password' onChange={handlechange}></input>
    <div className='button' onClick={register}>Register</div>
    <div>or</div>
    <div className='button' onClick={()=>navigate("/login")}>Login</div>
    
  </div>
  )
}

export default Register
