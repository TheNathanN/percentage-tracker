import React, { useState, useEffect } from 'react';

import styled from 'styled-components';

const PercCalc = () => {
  const [percent, setPercent] = useState();
  const [amount, setAmount] = useState();
  const [total, setTotal] = useState();

  useEffect(() => {
    const percentHandler = () => {
      const answer = amount / total;
      const formatAnswer = answer * 100;
      setPercent(formatAnswer);
    };
    percentHandler();
  }, [amount, total]);

  return (
    <Container>
      ${' '}
      <input
        className='dollar-amount'
        type='number'
        placeholder='Amount'
        onChange={e => setAmount(e.target.value)}
      />
      <span> of </span>${' '}
      <input
        className='dollar-amount'
        type='number'
        placeholder='Total Portfolio + Amount'
        onChange={e => setTotal(e.target.value)}
      />
      <span> = </span>
      {!percent || !total ? '0%' : `${Math.round(percent)}%`}
    </Container>
  );
};

export default PercCalc;

const Container = styled.div`
  text-align: center;
  line-height: 2rem;
  font-size: 1.2rem;
  height: 10rem;
  margin-bottom: 0;

  input {
    font-family: 'Archivo Narrow', sans-serif;
    font-size: 1.2rem;
    cursor: pointer;
    text-align: center;
    height: 2rem;
    width: 15rem;
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
