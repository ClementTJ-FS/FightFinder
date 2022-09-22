/* eslint-disable no-unused-vars */
/* eslint-disable react/forbid-prop-types */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import FightCard from '../components/cards/FightCard';

const StyledDetails = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10rem 0;
  width: 40%;
  margin: 0 auto;

  .event-info,
  .main-card h2 {
    text-align: center;
  }
  .event-info {
    margin-bottom: 2rem;
  }

  .main-card {
    width: 100%;
  }

  .fights {
    width: 100%;
  }

  .watchImg {
    width: 10rem;
  }

  h1 {
    font-size: 6rem;
  }

  @media (max-width: 768px) {
    width: 100vw;
    padding: 0;
    padding-top: 6rem;
    h1 {
      font-size: 3rem;
    }
    h2 {
      font-size: 1.5rem;
    }
    h4 {
      font-size: 1.2rem;
    }
    .watchImg {
      width: 7rem;
    }
    .event-info {
      margin: 0;
    }
  }
`;

function Details() {
  const [event, setEvent] = useState(null);
  const params = useParams();

  // useEffect to get event details from the API
  useEffect(() => {
    async function getEvent() {
      const response = await axios.get(`/events/${params.id}`, {
        headers: {
          accept: 'application/json',
        },
      });
      setEvent(response.data);
    }
    getEvent();
  }, [params.id]);

  if (event) {
    return (
      <StyledDetails>
        <section className='event-info'>
          <h1>{event.name}</h1>
          <h2>{event.location}</h2>
          <h2>
            {event.date} - {event.time}
          </h2>
          <img
            src={`${process.env.PUBLIC_URL}/img/watch/${event.watchOn}`}
            className='watchImg'
            alt={event.watchOn}
          />
        </section>
        <section className='fights'>
          {event &&
            event.Fights.map((fight) => (
              <FightCard key={fight.id} fight={fight} />
            ))}
        </section>
      </StyledDetails>
    );
  }
}

export default Details;
