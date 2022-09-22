import React, { useState } from 'react';
import styled from 'styled-components';
import Btn from '../components/Btn';
import { send } from '@emailjs/browser';

const StyledContact = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  color: #000;
  margin-bottom: 5rem;

  textarea {
    width: 100%;
    height: 100%;
    border: 1px solid #000;
  }

  h1 {
    margin: 10rem auto 0 auto;
  }
`;
function Contact() {
  const [data, setData] = useState({
    cName: '',
    cEmail: '',
    cMessage: '',
  });
  const [errorMsg, setErrorMsg] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    send('service_4043d22', 'template_zeu3xhp', data, 'CL0Ob1LHZoc2hCns7')
      .then((response) => {
        setSuccessMsg('Message sent successfully!');
      })
      .catch((err) => {
        setErrorMsg(err.text);
      });
  };

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  if (errorMsg) {
    return (
      <StyledContact>
        <h1>{errorMsg}</h1>;
      </StyledContact>
    );
  }
  if (successMsg) {
    return (
      <StyledContact>
        <h1>{successMsg}</h1>;
      </StyledContact>
    );
  }

  return (
    <StyledContact>
      <h1>Contact</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='cName'>
          Name:
          <input
            type='text'
            name='cName'
            onChange={handleChange}
            value={data.cName}
            required
          />
        </label>
        <label htmlFor='cEmail'>
          Email:
          <input
            type='email'
            name='cEmail'
            onChange={handleChange}
            value={data.cEmail}
            required
          />
        </label>
        <label htmlFor='cMessage'>
          Message:
          <textarea
            rows='8'
            cols='50'
            placeholder='Message'
            name='cMessage'
            onChange={handleChange}
            value={data.cMessage}
            required
          />
        </label>
        <Btn btnText='Submit' />
      </form>
    </StyledContact>
  );
}

export default Contact;
