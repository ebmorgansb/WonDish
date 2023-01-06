import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
import './index.css'
import { useEffect } from 'react';
import Footer from '../Footer';



// const [confirmPassword, setConfirmPassword] = useState("");
//   const [errors, setErrors] = useState([]);

//   if (sessionUser) return <Redirect to="/" />;

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (password === confirmPassword) {
//       setErrors([]);
//       return dispatch(sessionActions.signup({ email, username, password, firstName, lastName }))
//       .then(() => setShowModal(false))
//         .catch(async (res) => {
//           const data = await res.json();
//           if (data && data.errors) setErrors(data.errors);
//         });
//     }
//     return setErrors(['Confirm Password field must be the same as the Password field']);
//   };




const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();


  useEffect(()=>{
    const errors = []

    if (password !== repeatPassword) {
      errors.push('Password not matching')
    }

    setErrors(errors)
  },[password, repeatPassword])


  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password));
      if (data) {
        setErrors(data)
      }
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <>
    <form className='authForms' onSubmit={onSignUp}>
      <h1>Sign Up</h1>
      <div className='errors'>
        {errors.map((error, ind) => (
          <div className='oneError' key={ind}>{error}</div>
        ))}
      </div>
      <div className='oneFormInput'>
        <label>User Name</label>
        <input className='actualInput'
          type='text'
          name='username'
          onChange={updateUsername}
          value={username}
        ></input>
      </div>
      <div className='oneFormInput'>
        <label>Email</label>
        <input className='actualInput'
          type='text'
          name='email'
          onChange={updateEmail}
          value={email}
        ></input>
      </div>
      <div className='oneFormInput'>
        <label>Password</label>
        <input className='actualInput'
          type='password'
          name='password'
          onChange={updatePassword}
          value={password}
        ></input>
      </div>
      <div className='oneFormInput'>
        <label>Repeat Password</label>
        <input className='actualInput'
          type='password'
          name='repeat_password'
          onChange={updateRepeatPassword}
          value={repeatPassword}
          required={true}
        ></input>
      </div>
      <button className='authSubmitButton' type='submit'>Sign Up</button>
    </form>
    <Footer/>
    </>
  );
};

export default SignUpForm;
