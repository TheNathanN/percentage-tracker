import React, { useState } from 'react';
import PercCalc from './PercCalc';
import TotalCalc from './TotalCalc';

import styled from 'styled-components';

const CalcContainer = () => {
  const [calc, setCalc] = useState('total');

  return (
    <Container className='calc-section'>
      <div className='calc-options'>
        <h3
          onClick={() => setCalc('total')}
          className={`total-calc ${calc === 'total' && 'underline'}`}
        >
          Total <span>Calculator</span>
        </h3>
        <h3
          onClick={() => setCalc('percent')}
          className={`percent-calc ${calc === 'percent' && 'underline'}`}
        >
          Percent <span>Calculator</span>
        </h3>
      </div>
      <div className='calc-container'>
        {calc === 'total' && <TotalCalc />} {calc === 'percent' && <PercCalc />}
      </div>
    </Container>
  );
};

export default CalcContainer;

//Styles

const Container = styled.section`
  .calc-section {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 1rem;
  }

  .calc-options {
    display: flex;
    justify-content: space-between;
    text-align: center;
    font-weight: normal;
    width: 20rem;
    margin: 0 auto 1rem;

    h3 {
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }

    .underline {
      text-decoration: underline;
    }
  }

  .calc-container {
    display: flex;
    justify-content: center;
    background-color: #253f65;
    width: 21rem;
    border-radius: 15px;
    margin: 0 auto;
    padding: 1rem 0;
  }
`;
