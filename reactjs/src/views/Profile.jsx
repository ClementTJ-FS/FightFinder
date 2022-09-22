/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Btn from '../components/Btn';

const StyledProfile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  margin: 5rem 0;

  .container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 30%;
    margin: 0 auto;
    color: #000;
    margin-top: 3rem;
  }

  @media (max-width: 1024px) {
    .container {
      flex-direction: column;
      width: 100vw;
    }
  }
`;

function Profile({ user, setUser }) {
  const token = localStorage.getItem('token');
  const [statusMsg, setStatusMsg] = useState(null);
  const [data, setData] = useState({
    name: '',
    email: '',
    favSport: '',
    token: token,
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  // When edit button is clicked, modify the user's data in the database
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(`/users/${user.id}`, data, {
          headers: {
            accept: 'application/json',
          },
        })
        .then((res) => {
          setStatusMsg('Profile updated successfully!');
          setUser(res.data);
        });
    } catch (err) {
      setStatusMsg(err.response.data.message);
    }
  };

  return (
    <StyledProfile>
      <h1>{user.username}</h1>
      {statusMsg && <p>{statusMsg}</p>}
      <div className='container'>
        <div className='prefs'>
          <h3>Preferences</h3>
          <label htmlFor='fav'>
            Favorite Sport:
            <select
              name='favSport'
              value={user.favSport}
              onChange={handleChange}
            >
              <option value='' hidden>
                Select
              </option>
              <option value='boxing'>Boxing</option>
              <option value='mma'>MMA</option>
              <option value='muaythai'>Muay Thai</option>
              <option value='bjj'>BJJ</option>
              <option value='karate'>Karate</option>
            </select>
          </label>
        </div>
        <div className='profile'>
          <h3>Profile</h3>
          <form>
            <label htmlFor='name'>
              Name:
              <input
                type='text'
                name='name'
                placeholder={user.name}
                onChange={handleChange}
              />
            </label>
            <label htmlFor='email'>
              Email:
              <input
                type='text'
                name='email'
                placeholder={user.email}
                onChange={handleChange}
              />
            </label>
            <div className='edit-btn' onClick={handleClick} role='button'>
              <Btn btnText='Edit' />
            </div>
          </form>
        </div>
      </div>
    </StyledProfile>
  );
}

export default Profile;
