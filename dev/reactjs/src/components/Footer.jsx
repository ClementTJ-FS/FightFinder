import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Btn from './Btn';

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 5rem;
  background-color: #fff;
  color: #000;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: -6px 0px 10px rgba(0, 0, 0, 0.2);

  .footer-content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 90rem;
    margin: 0 auto;
  }

  @media (max-width: 1024px) {
    .footer-content {
      width: 50rem;
    }
  }
  @media (max-width: 768px) {
    .footer-content {
      width: 30rem;
    }
  }
`;
function Footer() {
  return (
    <StyledFooter>
      <div className='footer-content'>
        <p>Fight Finder</p>
        <Link to='/contact'>
          <Btn btnText='CONTACT' btnStyle='clear' />
        </Link>
      </div>
    </StyledFooter>
  );
}

export default Footer;
