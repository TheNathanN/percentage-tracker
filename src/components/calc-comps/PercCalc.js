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
    <Container className='perc-container'>
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
  .perc-container {
    text-align: center;
    line-height: 2rem;
    font-size: 1.2rem;
    margin-bottom: 0;

    input {
      font-size: 1rem;
    }
  }
`;
