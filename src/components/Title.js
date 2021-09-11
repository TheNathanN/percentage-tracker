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

//Styles

const Container = styled.header`
  .title {
    font-size: 2rem;
    font-weight: normal;
    text-align: center;
    margin-bottom: 1rem;
  }

  span {
    display: block;
  }
`;
