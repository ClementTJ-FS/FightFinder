/* eslint-disable react/self-closing-comp */
/* eslint-disable react/function-component-definition */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Event } from '../../utils/proptypes';
import Line from '../Line';

const Card = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 90rem;
  margin: 0 auto;
  color: #000;
  height: 35rem;
  :hover {
    color: #000;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.5);
  }

  .card-body {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 1rem 1rem;
  }

  .event-info {
    margin: 0 auto;
    width: 50%;
    text-align: center;
  }

  .fight-info {
    margin: 0 auto;
    width: 50%;
    text-align: center;
    color: #d20a0a;
    text-transform: uppercase;
    font-weight: bold;
  }

  .fighter-names {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }

  .fighter-info {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 1rem;
  }

  .rec-flag {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 50%;
  }

  .flag {
    width: 2rem;
  }

  .right {
    flex-direction: row-reverse;
    margin-left: auto;
  }

  .fighter1,
  .fighter2 {
    width: 45%;
  }

  .fighter2 {
    text-align: right;
  }

  .imgContainer {
    display: flex;
    justify-content: center;
    overflow: hidden;
    width: 30%;
  }

  .fighter-img {
    height: 100%;
  }

  .stats {
    text-align: center;
    padding-top: 2.55rem;
    font-weight: bold;
  }

  .card-footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 0.5rem;
    padding: 0 1rem;
  }

  .watchOn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10rem;
    height: 3rem;
    overflow: hidden;
  }

  .watchImg {
    height: 100%;
  }

  .tag {
    width: 3rem;
    height: 3rem;
  }

  .h3fix {
    margin: 0;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  h1 {
    text-align: center;
  }

  @media (max-width: 768px) {
    width: 100vw;
    height: 19rem;
    color: #000;
    overflow: hidden;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.5);
    h1 {
      font-size: 1.5rem;
    }
    h2 {
      font-size: 1.2rem;
    }
    h3 {
      font-size: 1.2rem;
    }
    p {
      font-size: 1rem;
    }
    .card-body {
      padding: 0.2rem;
    }
    .event-info {
      width: 100%;
    }
    .fight-info {
      width: 100%;
    }
    .flag {
      width: 1.5rem;
    }
    .stats {
      padding-top: 1.7rem;
      font-size: 0.8rem;
    }
    .fighter1,
    .fighter2 {
      font-size: 0.8rem;
      padding: 0;
      margin: 0;
    }
    .rec-flag {
      width: 100%;
    }
    .watchOn {
      width: 5rem;
      height: 2.5rem;
    }
    .card-footer {
      margin-top: 0rem;
      height: 2rem;
    }
    .tag {
      width: 2rem;
      height: 2rem;
    }
    .imgContainer {
      width: 0;
    }
  }
`;

const BigCard = ({ event }) => {
  const fight = event.Fights[0];
  const fighter1 = fight.Fighters[0];
  const fighter2 = fight.Fighters[1];
  return (
    <Card to={`/details/${event.id}`}>
      <div className='imgContainer'>
        <img
          src={`${process.env.PUBLIC_URL}/img/fighters/${fighter2.img}`}
          className='fighter-img'
          alt={fighter2.name}
        />
      </div>
      <div className='card-body'>
        <h1>{event.name}</h1>
        <span>
          <Line />
        </span>
        <div className='event-info'>
          <h3 className='h3fix'>{event.location}</h3>
          <h3 className='h3fix'>
            {event.date} - {event.time}
          </h3>
        </div>
        <div className='fight-info'>
          <p>
            {fight.rounds} rounds in the {fight.weightClass} division
          </p>
        </div>
        <div className='fighter-names'>
          <h2>{fighter2.name}</h2>
          <h2>{fighter1.name}</h2>
        </div>
        <span>
          <Line />
        </span>
        <div className='fighter-info'>
          <div className='fighter1'>
            <div className='rec-flag'>
              <h3 className='h3fix'>{fighter2.record}</h3>
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
              <li>{fighter2.stance}</li>
            </ul>
          </div>
          <div className='stats'>
            <ul>
              <li>AGE</li>
              <li>HEIGHT</li>
              <li>REACH</li>
              <li>STANCE</li>
            </ul>
          </div>
          <div className='fighter2'>
            <div className='rec-flag right'>
              <h3 className='h3fix'>{fighter1.record}</h3>
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
              <li>{fighter1.stance}</li>
            </ul>
          </div>
        </div>
        <div className='card-footer'>
          <div className='watchOn'>
            <img
              src={`${process.env.PUBLIC_URL}/img/watch/${event.watchOn}`}
              className='watchImg'
              alt={event.watchOn}
            />
          </div>
          <div className='tags'>
            <img
              src={`${process.env.PUBLIC_URL}/img/icon/${event.eventType}`}
              className='tag'
              alt={event.eventType}
            />
          </div>
        </div>
      </div>
      <div className='imgContainer'>
        <img
          src={`${process.env.PUBLIC_URL}/img/fighters/${fighter1.img}`}
          className='fighter-img'
          alt={fighter1.name}
        />
      </div>
    </Card>
  );
};

BigCard.propTypes = {
  event: PropTypes.shape(Event),
};

BigCard.defaultProps = {
  event: {},
};

export default BigCard;
