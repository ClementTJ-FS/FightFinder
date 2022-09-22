/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Event } from '../../utils/proptypes';
import Line from '../Line';

const StyledSmallCard = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 90rem;
  height: 12rem;
  margin: 0 auto;
  margin-bottom: 2rem;
  color: #000;

  :hover {
    color: #000;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.5);
  }

  .imgContainer {
    width: 20%;
    height: 100%;
    object-fit: fill;
  }

  .eventImg {
    width: 100%;
    height: 100%;
  }

  .card-body {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    padding: 1rem;
  }

  .event-info {
    width: 50%;
  }

  .fight-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
  }
  .fighter-names {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }

  .fighter-info {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .fighter1,
  .fighter2 {
    width: 45%;
  }

  .fighter2 {
    text-align: right;
  }

  .rec-flag {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 80%;
  }

  .right {
    flex-direction: row-reverse;
    margin-left: auto;
  }

  .stat-labels {
    padding-top: 2.2rem;
    text-align: center;
    font-weight: bold;
  }

  .watchOn {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    height: 2rem;
    overflow: hidden;
  }

  .watchImg {
    height: 100%;
  }

  .flag {
    width: 2rem;
  }

  #datetime {
    margin: 0;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  h2 {
    font-size: 2.5rem;
  }

  @media (max-width: 768px) {
    width: 100vw;
    height: 9rem;
    color: #000;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.5);
    h2 {
      font-size: 1.2rem;
    }
    h3 {
      font-size: 1rem;
    }
    h4 {
      font-size: 0.8rem;
    }
    li,
    p {
      font-size: 1rem;
    }
    .flag {
      width: 1rem;
    }
    .imgContainer {
      width: 0;
    }
    .eventImg {
      display: none;
    }
    .watchImg {
      width: 5rem;
    }
    .fight-info {
      justify-content: flex-start;
    }
    .stat-labels {
      padding-top: 1.45rem;
    }
    .rec-flag {
      font-weight: bold;
    }
    .card-body {
      overflow: hidden;
    }
  }
`;

function SmallCard({ event }) {
  const fighter1 = event.Fights[0].Fighters[0];
  const fighter2 = event.Fights[0].Fighters[1];

  return (
    <StyledSmallCard to={`/details/${event.id}`}>
      <div className='imgContainer'>
        <img
          src={`${process.env.PUBLIC_URL}/img/events/${event.eventImg}`}
          className='eventImg'
          alt={event.eventImg}
        />
      </div>
      <div className='card-body'>
        <div className='event-info'>
          <h2>{event.name}</h2>
          <h4>{event.location}</h4>
          <h4 id='datetime'>
            {event.date} - {event.time}
          </h4>
          <div className='watchOn'>
            <img
              src={`${process.env.PUBLIC_URL}/img/watch/${event.watchOn}`}
              className='watchImg'
              alt={event.watchOn}
            />
          </div>
        </div>
        <div className='fight-info'>
          <div className='fighter-names'>
            <h3>{fighter2.name}</h3>
            <h3>{fighter1.name}</h3>
          </div>
          <div>
            <Line />
          </div>
          <div className='fighter-info'>
            <div className='fighter1'>
              <div className='rec-flag'>
                <p>{fighter2.record}</p>
                <img
                  src={`${process.env.PUBLIC_URL}/img/flags/4x3/${fighter2.country}.svg`}
                  className='flag'
                  alt={fighter2.country}
                />
              </div>
              <ul>
                <li>{fighter2.age}</li>
                <li>{fighter2.height}</li>
                <li>{fighter2.reach}</li>
              </ul>
            </div>
            <ul className='stat-labels'>
              <li>AGE</li>
              <li>HEIGHT</li>
              <li>REACH</li>
            </ul>
            <div className='fighter2'>
              <div className='rec-flag right'>
                <p>{fighter1.record}</p>
                <img
                  src={`${process.env.PUBLIC_URL}/img/flags/4x3/${fighter1.country}.svg`}
                  className='flag'
                  alt={fighter1.country}
                />
              </div>
              <ul>
                <li>{fighter1.age}</li>
                <li>{fighter1.height}</li>
                <li>{fighter1.reach}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </StyledSmallCard>
  );
}

SmallCard.propTypes = {
  event: PropTypes.shape(Event),
};

SmallCard.defaultProps = {
  event: {},
};

export default SmallCard;
