/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Btn from '../components/Btn';
import { useParams, useNavigate } from 'react-router-dom';

const ResetPWForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20rem;
  border: none;
  margin: 20rem auto;
`;
const ResetSuccess = styled.div`
  text-align: center;
  margin-top: 15rem;
`;

function Reset() {
  const { id } = useParams();
  const [errors, setErrors] = useState({
    password: '',
  });
  const [data, setData] = useState({
    password: '',
    password2: '',
  });
  const [isSuccess, setIsSuccess] = useState(false);
  // get resetToken from params

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = async (e) => {
    e.preventDefault();
    // check if password1 and password2 match
    if (data.password !== data.password2) {
      setErrors({
        password: 'Passwords do not match',
      });
    } else {
      setErrors({
        password: '',
      });
      // send new password to server
      try {
        await axios
          .post(`/users/${id}`, data, {
            headers: {
              accept: 'application/json',
            },
          })
          .then(() => {
            setIsSuccess(true);
            // delay redirect to home page
            setTimeout(() => {
              useNavigate('/');
            }, 5000);
          });
      } catch (err) {
        setErrors({
          password: err.response.data.message,
        });
      }
    }
  };

  if (isSuccess) {
    return (
      <ResetSuccess>
        <h1>
          Password reset successful! <br /> You can now login.
        </h1>
      </ResetSuccess>
    );
  }

  return (
    <ResetPWForm>
      <label htmlFor='password'>
        Password:
        <input
          type='password'
          name='password'
          onChange={handleChange}
          value={data.password}
        />
      </label>
      <label htmlFor='password2'>
        Confirm Password:
        <input
          type='password'
          name='password2'
          onChange={handleChange}
          value={data.password2}
        />
      </label>
      <p>{errors.password}</p>
      <div className='buttons'>
        <div role='button' tabIndex='-1' onClick={handleClick}>
          <Btn btnText='RESET' />
        </div>
      </div>
    </ResetPWForm>
  );
}

export default Reset;
