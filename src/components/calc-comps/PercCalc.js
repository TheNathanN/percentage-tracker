import React, { useState, useEffect } from 'react';

import './PercCalc.scss';

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
    <div className='perc-container'>
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
    </div>
  );
};

export default PercCalc;
