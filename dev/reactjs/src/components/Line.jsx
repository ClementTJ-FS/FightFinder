import React from 'react';
import styled from 'styled-components';

const StyledLine = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 3px;
  background: linear-gradient(to right, #d20a0a 50%, #dcbe3a 50%);
  z-index: 2;
`;

function Line() {
  return <StyledLine />;
}

export default Line;
