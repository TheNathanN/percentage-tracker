import React, { useState, useEffect } from 'react';

import styled from 'styled-components';

const TotalCalc = () => {
  const [percent, setPercent] = useState();
  const [amount, setAmount] = useState();
  const [total, setTotal] = useState();

  useEffect(() => {
    const totalHandler = () => {
      const formatPerc = Number(percent) / 100;
      const answer = Number(amount) * formatPerc;
      setTotal(answer);
    };
    totalHandler();
  }, [percent, amount]);

  return (
    <Container className='total-container'>
      <input
        className='total-percent'
        type='number'
        placeholder='0'
        onChange={e => setPercent(e.target.value)}
      />{' '}
      % of
      <span>
        ${' '}
        <input
          className='total-money'
          type='number'
          placeholder='Total Portfolio'
          onChange={e => setAmount(e.target.value)}
        />
      </span>
      ={' '}
      <span>{!total ? '$0.00' : `$${Math.round(total).toLocaleString()}`}</span>
    </Container>
  );
};

export default TotalCalc;

const Container = styled.div`
  .total-container {
    text-align: center;
    line-height: 2rem;
    font-size: 1.2rem;
  }

  .total-percent {
    width: 3rem;
    margin-bottom: 0.5rem;
  }

  input {
    font-family: 'Archivo Narrow', sans-serif;
    font-size: 1.2rem;
    cursor: pointer;
    text-align: center;
    height: 2rem;
    border: none;
    border-radius: 3px;
    background-color: white;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    &[type='number'] {
      -moz-appearance: textfield;
    }

    &:active {
      border: 0px solid transparent;
    }
  }
`;
