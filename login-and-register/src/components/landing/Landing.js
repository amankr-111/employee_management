import React from 'react';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate();

  const handleEmployee = () => {
    navigate('/login');
  }

  const handleManager = () => {
    navigate('/managerlogin');
  }

  return (
    <div>
      <div className='homepage'>
        <h1>Please Select</h1>
        <div className='mom' style={{
          display: 'flex',
          justifyContent: "space-around",
          alignItems: 'center',
          width: '60%',
          margin: "30px"
        }}>
          <div className='butn' onClick={handleManager} style={{
            background: '#1877f2',
            border: '1px solid #1877f2',
            color: '#fff',
            fontSize: '1.25rem',
            padding: '0.5rem',
            margin: '0.5rem 0',
            borderRadius: '8px',
            outline: 'none',
            cursor: 'pointer'
          }}>Manager</div>
          <div className='butn' onClick={handleEmployee} style={{
            background: '#1877f2',
            border: '1px solid #1877f2',
            color: '#fff',
            fontSize: '1.25rem',
            padding: '0.5rem',
            margin: '0.5rem 0',
            borderRadius: '8px',
            outline: 'none',
            cursor: 'pointer'
          }}>Employee</div>
        </div>
      </div>
    </div>
  )
}

export default Landing;
