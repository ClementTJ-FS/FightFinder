import React from 'react';
import styled from 'styled-components';

const StyledBtn = styled.button`
  background-color: #d20a0a;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: bold;
  border: 2px solid #d20a0a;
  :hover {
    background-color: #d20a0a;
    border-color: #dcbe3a;
    cursor: pointer;
  }
`;

const StyledClearBtn = styled.button`
  background-color: #fff;
  color: #000;
  border: 2px solid #d20a0a;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: bold;
  :hover {
    color: #000;
    background-color: #fff;
    border-color: #dcbe3a;
    cursor: pointer;
  }
`;

function Btn({ btnText, btnStyle }) {
  if (btnStyle === 'clear') {
    return <StyledClearBtn>{btnText}</StyledClearBtn>;
  }
  return <StyledBtn>{btnText}</StyledBtn>;
}

export default Btn;
