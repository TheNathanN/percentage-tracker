import React, { useState } from 'react';

import './PercCalc.scss';

const PercCalc = () => {
  const [percent, setPercent] = useState();
  const [amount, setAmount] = useState();
  const [total, setTotal] = useState();

  return (
    <div className='perc-container'>
      $ <input className='dollar-amount' type='number' placeholder='Amount' />
      <span> of </span>${' '}
      <input
        className='dollar-amount'
        type='number'
        placeholder='Total Portfolio'
      />
      <span> = </span>
      {!percent ? '0%' : `${percent}%`}
    </div>
  );
};

export default PercCalc;
