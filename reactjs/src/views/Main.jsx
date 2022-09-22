/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Event } from '../utils/proptypes';
import BigCard from '../components/cards/BigCard';
import SmallCard from '../components/cards/SmallCard';

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5rem 0;
  width: 100vw;

  .categories {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    text-align: center;
  }

  .category {
    margin: 2rem 0;
    color: gray;
  }

  .active {
    color: #000;
  }
`;

function Main({ events, user }) {
  const [selectedCategory, setSelectedCategory] = useState('boxing');
  const [filteredEvents, setFilteredEvents] = useState(
    events.filter((event) => event.eventType.slice(0, -4) === selectedCategory)
  );

  // filter events by category
  const handleCategoryClick = (e) => {
    e.target.classList.add('active');
    const value = e.target.innerText.toLowerCase();
    setSelectedCategory(value);
    setFilteredEvents(
      events.filter((event) => event.eventType.slice(0, -4) === value)
    );
  };

  // check if user is logged in and filter events accordingly
  useEffect(() => {
    if (user) {
      // check if user favSport is boxing or mma
      if (user.favSport === 'boxing' || user.favSport === 'mma') {
        setSelectedCategory(user.favSport);
        setFilteredEvents(
          events.filter(
            (event) => event.eventType.slice(0, -4) === user.favSport
          )
        );
      }
    }
  }, [user]);

  return (
    <StyledMain>
      <h2 className='category active'>Featured Fight</h2>
      <BigCard event={events[0]} />
      <div className='categories'>
        <h2
          className={
            selectedCategory === 'boxing' ? 'category active' : 'category'
          }
          onClick={handleCategoryClick}
        >
          BOXING
        </h2>
        <h2
          className={
            selectedCategory === 'mma' ? 'category active' : 'category'
          }
          onClick={handleCategoryClick}
        >
          MMA
        </h2>
      </div>

      {filteredEvents.map((event) => (
        <SmallCard event={event} key={event.id} />
      ))}
    </StyledMain>
  );
}

Main.propTypes = {
  events: PropTypes.arrayOf(Event),
};

Main.defaultProps = {
  events: [],
};
export default Main;
