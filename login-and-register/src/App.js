
import { useState } from 'react';
import './App.css';
import Homepage from './components/homepage/Homepage';
import Login from './components/login/Login';
import Register from './components/register/Register';
import ManagerLogin from './components/Manager/login/ManagerLogin';
import ManagerRegister from './components/Manager/register/ManagerRegister';
import Landing from './components/landing/Landing';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
  
} from "react-router-dom";
import ManagerHome from './components/managerHome/ManagerHome';
import Update from './components/Update';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Landing/>}/>
          {/* <Route exact path='/home' element={user && user._id ? <Homepage setLoginUser={setLoginUser}/>:<Navigate replace to={"/"}/>}/> */}
          <Route exact path='/login' element={ <Login />}/>
          <Route exact path='/home' element={ <Homepage/>}/>
          <Route exact path='/Update' element={ <Update/>}/>
          <Route exact path='/manager' element={ <ManagerHome/>}/>
          <Route exact path='/register' element={ <Register/>}/>
          <Route exact path='/managerlogin' element={ <ManagerLogin />}/>
          <Route exact path='/managerregister' element={ <ManagerRegister/>}/>
          
        </Routes>
      </Router>

      
     
      
    </div>
  );
}

export default App;
