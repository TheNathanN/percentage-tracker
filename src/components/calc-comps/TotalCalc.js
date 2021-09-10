import React, { useState, useEffect } from 'react';

import './TotalCalc.scss';

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
    <div className='total-container'>
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
    </div>
  );
};

export default TotalCalc;
