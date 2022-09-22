/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Btn from './Btn';
import axios from 'axios';

const StyledHeader = styled.header`
  .brand {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    h1 {
      padding: 0;
      margin: 0;
    }
  }

  .container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100vw;
    height: 5rem;
    background-color: #fff;
    color: #000;
    margin-bottom: 2rem;
    align-items: center;
    padding: 0 2rem;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
  }

  .shadow {
    box-shadow: 0rem 0.5rem 1rem rgba(0, 0, 0, 0.2);
  }

  nav {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    width: 25%;
    padding-right: 4rem;
    height: 100%;
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      gap: 1rem;
    }
  }

  img {
    width: 4rem;
    height: 4rem;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 1.5rem;
    }
    .container {
      width: 100vw;
      padding: 0 0.5rem;
      margin: 0;
    }
    nav {
      padding-right: 1rem;
    }
  }
`;

function Header({
  isScrolled,
  isLoggedIn,
  setIsLoggedIn,
  setIsLoginClicked,
  isLoginClicked,
  user,
  setUser,
  matches,
}) {
  const navigate = useNavigate();
  const location = useLocation();
  const handleLogout = async () => {
    const token = localStorage.getItem('token');
    try {
      await axios
        .post('/auth/logout', {
          token,
        })
        .then((res) => {
          if (res.status === 200) {
            console.log('logout successful');
          }
        });
    } catch (err) {
      console.log(err);
    }
    setUser(null);
    setIsLoggedIn(false);
    localStorage.clear();
    // check if on profile page or any subpage
    if (location.pathname.includes('profile')) {
      navigate('/');
    } else {
      navigate(0);
    }
  };

  return (
    <StyledHeader>
      <div className={isScrolled ? 'container shadow' : 'container'}>
        <Link to='/'>
          <div className='brand'>
            <img src={`${process.env.PUBLIC_URL}/Logo.svg`} alt='logo' />
            <h1>FIGHT FINDER</h1>
          </div>
        </Link>
        <nav>
          <ul>
            <li>{matches && <Link to='/'>Home</Link>}</li>
            {isLoggedIn ? (
              <li>
                <Link to={`/profile/${user.username}`}>Profile</Link>
              </li>
            ) : (
              <li>
                <div
                  onClick={() => setIsLoginClicked(!isLoginClicked)}
                  role='button'
                  tabIndex={-1}
                >
                  <Btn btnText='Login' />
                </div>
              </li>
            )}
            {isLoggedIn ? (
              <li>
                <div onClick={handleLogout} role='button' tabIndex={-1}>
                  <Btn btnText='Logout' />
                </div>
              </li>
            ) : null}
          </ul>
        </nav>
      </div>
    </StyledHeader>
  );
}

export default Header;
