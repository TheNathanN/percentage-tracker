import React from 'react';
import styled from 'styled-components';

const Title = () => {
  return (
    <Container>
      <h1 className='title'>
        Percent Calc <span>&</span> Track
      </h1>
    </Container>
  );
};

export default Title;

const Container = styled.header`
  .title {
    font-size: 2rem;
    font-weight: normal;
    text-align: center;
    margin: 3rem 0 2rem;
  }

  span {
    display: block;
  }
`;
