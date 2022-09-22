/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Fights } from '../../utils/proptypes';

const StyledFightCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 12.5rem;
  margin: 0 auto;
  margin-bottom: 3rem;
  :hover {
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.5);
  }
  .img-container {
    overflow: hidden;
    display: flex;
    justify-content: center;
    width: 20%;
  }

  .card-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 0 1rem;
  }

  .fighter-info {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }

  .fighter1,
  .fighter2 {
    width: 50%;
    border-bottom: 2px solid red;
  }

  .fighter2 {
    flex-direction: row-reverse;
    text-align: right;
    border-bottom: 2px solid gold;
  }

  .flag {
    width: 2rem;
  }

  h4 {
    color: #d20a0a;
  }

  @media (max-width: 768px) {
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.5);
    .img-container {
      width: 0;
    }
`;

function FightCard({ fight }) {
  const fighter1 = fight.Fighters[0];
  const fighter2 = fight.Fighters[1];

  let type = '';
  switch (fight.type) {
    case 1: {
      type = 'Main Event';
      break;
    }
    case 2: {
      type = 'Co-Main Event';
      break;
    }
    default: {
      type = 'Fight';
      break;
    }
  }
  return (
    <StyledFightCard>
      <div className='img-container'>
        <img
          src={`${process.env.PUBLIC_URL}/img/fighters/${fighter1.img}`}
          className='fighter-img'
          alt={fighter1.name}
        />
      </div>
      <div className='card-body'>
        <h3>{type}</h3>
        <h4>{fight.weightClass}</h4>
        <h5>{fight.rounds} Rounds</h5>
        <div className='fighter-info'>
          <div className='fighter1'>
            <img
              src={`${process.env.PUBLIC_URL}/img/flags/4x3/${fighter1.country}.svg`}
              className='flag'
              alt={fighter1.country}
            />
            <h4>{fighter1.name}</h4>
            <h5>{fighter1.record}</h5>
          </div>
          <div className='fighter2'>
            <img
              src={`${process.env.PUBLIC_URL}/img/flags/4x3/${fighter2.country}.svg`}
              className='flag'
              alt={fighter2.country}
            />
            <h4>{fighter2.name}</h4>
            <h5>{fighter2.record}</h5>
          </div>
        </div>
      </div>
      <div className='img-container'>
        <img
          src={`${process.env.PUBLIC_URL}/img/fighters/${fighter2.img}`}
          className='fighter-img'
          alt={fighter2.name}
        />
      </div>
    </StyledFightCard>
  );
}

FightCard.propTypes = {
  fight: PropTypes.shape(Fights),
};

FightCard.defaultProps = {
  fight: {},
};

export default FightCard;
