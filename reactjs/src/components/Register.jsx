import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Btn from './Btn';

const StyledRegister = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20.5rem;
  border: none;
  background: linear-gradient(to right, #d20a0a 50%, #dcbe3a 50%);
  box-shadow: 0 0.3rem 0.3rem rgba(0, 0, 0, 0.5);
  margin-right: 0.5rem;
  margin-top: 5rem;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 3;
  #close {
    font-size: 1.5rem;
    font-weight: bold;
    color: red;
    margin: 0;
    align-self: flex-end;
  }
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    width: 18.5rem;
    margin-top: 0.2rem;
    padding: 0 1rem 1rem 1rem;
  }
  input {
    width: 90%;
  }
  .error {
    border: 2px solid red;
  }
  .errors {
    text-align: center;
    color: red;
  }
}
`;
function Register({ setIsRegisterClicked, setIsLoginClicked }) {
  const regRef = useRef();
  const [regErrors, setRegErrors] = useState({
    server: null,
    username: '',
    password: '',
  });
  const [isSuccess, setIsSuccess] = useState(false);

  // Close the register modal when the user clicks outside of it
  useEffect(() => {
    const handler = (e) => {
      if (!regRef.current.contains(e.target)) {
        setIsLoginClicked(false);
        setIsRegisterClicked(false);
      }
    };
    document.addEventListener('mousedown', handler);
    // clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('mousedown', handler);
    };
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // get data from each input field
    const data = {
      username: e.target.un.value,
      password: e.target.pw.value,
      email: e.target.email.value,
      name: e.target.name.value,
    };
    // check if pw1 and pw2 match
    if (data.password !== document.getElementById('pw2').value) {
      setRegErrors({
        password: 'Passwords do not match',
      });
    } else {
      setRegErrors({
        password: '',
      });
      // make a post request to the server to register the user
      try {
        const res = await axios.post('/users', data);
        // if the request is successful, set the user and isLoggedIn to true
        if (res.status === 201) {
          setIsSuccess(true);
        } else if (res.status === 400) {
          setRegErrors({
            username: 'Username already exists',
          });
        }
      } catch (err) {
        // if the request is unsuccessful, set the error message
        setRegErrors({ username: err.response.data.message });
      }
    }
  };

  if (isSuccess) {
    return (
      <StyledRegister ref={regRef}>
        <div className='container'>
          <h4>Registration Successful!</h4>
          <p>You can now login.</p>
        </div>
      </StyledRegister>
    );
  }
  return (
    <StyledRegister ref={regRef}>
      <div className='container'>
        <button
          id='close'
          type='button'
          onClick={() => setIsRegisterClicked(false)}
        >
          X
        </button>
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor='name'>
            Name:
            <input type='text' id='name' required min={3} />
          </label>
          <label htmlFor='un'>
            Username:
            <input
              type='text'
              id='un'
              required
              min={3}
              className={regErrors.username ? 'error' : null}
            />
          </label>
          <label htmlFor='email'>
            Email:
            <input type='email' id='email' required min={3} />
          </label>
          <label htmlFor='pw'>
            Password:
            <input
              type='password'
              id='pw'
              required
              min={3}
              className={regErrors.password ? 'error' : null}
            />
          </label>
          <label htmlFor='pw2'>
            Confirm Password:
            <input
              type='password'
              id='pw2'
              required
              min={3}
              className={regErrors.password ? 'error' : null}
            />
          </label>
          {regErrors ? (
            <div className='errors'>
              <p>{regErrors.server}</p>
              <p>{regErrors.username}</p>
              <p>{regErrors.password}</p>
            </div>
          ) : null}
          <Btn btnText='Register' />
        </form>
      </div>
    </StyledRegister>
  );
}

export default Register;
