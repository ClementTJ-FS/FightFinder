/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Btn from './Btn';
import { send } from '@emailjs/browser';

const StyledLogin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20rem;
  border: none;
  background: linear-gradient(to right, #d20a0a 50%, #dcbe3a 50%);
  box-shadow: 0 0.3rem 0.3rem rgba(0, 0, 0, 0.5);
  margin-right: 1rem;
  margin-top: 5rem;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 3;

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    width: 16rem;
    margin-top: 0.2rem;
    padding: 0 2rem 2rem 2rem;
  }

  input {
    width: 90%;
  }

  #close {
    font-size: 1.5rem;
    font-weight: bold;
    color: red;
    margin: 0;
    align-self: flex-end;
    cursor: pointer;
  }

  .buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 0.5rem;
    align-items: center;
    margin: 1rem 0;
  }

  .reset {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
    text-decoration: underline;
    cursor: pointer;
  }
`;

function Login({
  setIsLoginClicked,
  setIsRegisterClicked,
  setUser,
  setIsLoggedIn,
}) {
  const loginRef = useRef();
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Close the login modal when the user clicks outside of it
  useEffect(() => {
    const handler = (e) => {
      // if user clicks on the register modal, do nothing
      if (!loginRef.current.contains(e.target)) {
        setIsLoginClicked(false);
      }
    };
    document.addEventListener('mousedown', handler);
    // clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('mousedown', handler);
    };
  });

  // open the register modal when the user clicks the register button
  const handleRegisterClick = () => {
    setIsLoginClicked(false);
    setIsRegisterClicked(true);
  };

  const TryLogin = async (e) => {
    e.preventDefault();
    const data = {
      username,
      password,
    };
    await axios
      .post('/auth/login', data)
      .then((res) => {
        localStorage.setItem('user', JSON.stringify(res.data));
        localStorage.setItem('token', res.data.token);
        setUser(res.data);
        setIsLoggedIn(true);
        setIsLoginClicked(false);
        navigate(`/`);
      })
      .catch((err) => {
        setLoginError(err.response.data.message);
      });
  };

  const resetPW = async (e) => {
    e.preventDefault();
    const data = {
      username,
      from: window.location.hostname,
    };
    await axios
      .post('/auth/reset', data)
      .then((res) => {
        const message = {
          cName: res.data.name,
          cEmail: res.data.email,
          cMessage: res.data.resetLink,
        };
        send(
          'service_4043d22',
          'template_hcqs8ms',
          message,
          'CL0Ob1LHZoc2hCns7'
        );
        setLoginError('An email has been sent to you with a reset link.');
      })
      .catch((err) => {
        setLoginError(err.response.data.message);
      });
  };

  return (
    <StyledLogin ref={loginRef}>
      <div className='container'>
        <button
          id='close'
          type='button'
          onClick={() => setIsLoginClicked(false)}
        >
          X
        </button>
        <h2>Login</h2>
        <form>
          <label htmlFor='un'>
            Username:
            <input
              type='text'
              id='un'
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label htmlFor='pw'>
            Password:
            <input
              type='password'
              id='pw'
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          {loginError && (
            <div className='error'>
              <p>{loginError}</p>
            </div>
          )}
          <div className='buttons'>
            <div onClick={TryLogin} role='button' tabIndex='-1'>
              <Btn btnText='LOGIN' />
            </div>
            <div onClick={handleRegisterClick} role='button' tabIndex='-1'>
              <Btn btnText='REGISTER' btnStyle='clear' />
            </div>
          </div>
          <div className='reset' onClick={resetPW}>
            <p>Forgot your password?</p>
          </div>
        </form>
      </div>
    </StyledLogin>
  );
}

export default Login;
