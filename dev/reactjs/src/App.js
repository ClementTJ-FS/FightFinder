import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Main from './views/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import Details from './views/Details';
import Login from './components/Login';
import Register from './components/Register';
import Contact from './views/Contact';
import Profile from './views/Profile';
import NotFound from './views/NotFound';
import Reset from './views/Reset';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoginClicked, setIsLoginClicked] = useState(false);
  const [isRegisterClicked, setIsRegisterClicked] = useState(false);
  const [events, setEvents] = useState(null);
  const [user, setUser] = useState(null);
  const [matches, setMatches] = useState(
    window.matchMedia('(min-width: 768px)').matches
  );

  useEffect(() => {
    window
      .matchMedia('(min-width: 768px)')
      .addEventListener('change', (e) => setMatches(e.matches));
  }, []);

  // check if user is logged in
  useEffect(() => {
    const u = localStorage.getItem('user');
    if (u) {
      setUser(JSON.parse(u));
      setIsLoggedIn(true);
    }
  }, []);

  // for scrolling
  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
  }, []);

  useEffect(() => {
    // get events from api using axios
    async function fetchEvents() {
      const response = await axios.get(`/events`, {
        headers: {
          accept: 'application/json',
        },
      });
      setEvents(response.data);
    }
    fetchEvents();
  }, []);

  return (
    <div className='App'>
      {isLoginClicked && (
        <Login
          setUser={setUser}
          setIsLoggedIn={setIsLoggedIn}
          setIsLoginClicked={setIsLoginClicked}
          setIsRegisterClicked={setIsRegisterClicked}
        />
      )}
      {isRegisterClicked && (
        <Register
          setIsRegisterClicked={setIsRegisterClicked}
          setIsLoginClicked={setIsLoginClicked}
        />
      )}
      <Header
        user={user}
        setUser={setUser}
        isScrolled={isScrolled}
        setIsLoggedIn={setIsLoggedIn}
        isLoggedIn={isLoggedIn}
        isLoginClicked={isLoginClicked}
        setIsLoginClicked={setIsLoginClicked}
        matches={matches}
      />
      <Routes>
        <Route
          exact
          path='/'
          element={events && <Main events={events} user={user} />}
        />
        <Route exact path='/details/:id' element={<Details />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route
          exact
          path='/profile/:user'
          element={user && <Profile user={user} setUser={setUser} />}
        />
        <Route exact path='/reset/:id' element={<Reset />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      {matches && <Footer />}
    </div>
  );
}

export default App;
