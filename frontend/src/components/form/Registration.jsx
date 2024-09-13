import './Registration.css'
import React, { useEffect, useState } from 'react';
import { useNavigate, Link, useLocation, useParams } from 'react-router-dom';

function Registration() {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [formName, setFormName] = useState('Registration form');
  const [btnName, setBtnName] = useState('SignUp');
  const [account, setAccount] = useState('Already Registered?');
  const [linkname, setLinkname] = useState('login');

  function handleSubmit() {
    
  }

 
 

  return (
    <>
      <div className='form-container'>
        <form>
          <h1>{formName}</h1>
          <p>{error}</p>
          {btnName !== 'Login' && (
            <>
              <label>First Name</label>
              <input type='text' value={firstname} onChange={(e) => setFirstName(e.target.value)} placeholder='Enter first name' />
              <label>Last Name</label>
              <input type='text' value={lastname} onChange={(e) => setLastName(e.target.value)} placeholder='Enter last name' />
              <label>Phone</label>
              <input type='text' value={phone} onChange={(e) => setPhone(e.target.value)} placeholder='Enter phone number' />
            </>
          )}
          <label>Email</label>
          <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter email' />
          <label>Password</label>
          <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter password' />
          <button type='submit' onClick={handleSubmit}>{btnName}</button>
          <div className='link'>
            {account}
            <Link to={`/${linkname}`}>{linkname}</Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default Registration;
