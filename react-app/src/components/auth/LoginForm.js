import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';
import Footer from '../Footer';
import './index.css'

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [credential, setCredential] = useState("");
  // const [password, setPassword] = useState("");
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <>
    <form className='authForms' onSubmit={onLogin}>
      <h1>Log in</h1>
      <div className='errors'>
        {errors.map((error, ind) => (
          <div className='oneError' key={ind}>{error}</div>
        ))}
      </div>
      <div className='formInputs'>
      <div className='oneFormInput'>
        <label htmlFor='email'>Email</label>
        <input className='actualInput'
          name='email'
          type='text'
          // placeholder='Email'
          value={email}
          onChange={updateEmail}
        />
      </div>
      <div className='oneFormInput'>
        <label htmlFor='password'>Password</label>
        <input className='actualInput'
          name='password'
          type='password'
          // placeholder='Password'
          value={password}
          onChange={updatePassword}
        />
        </div>
        </div>
        <button className='authSubmitButton' type='submit'>Login</button>
        <button className='authSubmitButton' type="submit"
  onClick={()=>{setEmail("demo@aa.io");setPassword("password")}}>Demo Login</button>
    </form>
    <Footer/>
    </>
  );
};

export default LoginForm;
