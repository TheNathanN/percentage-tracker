import React, { useState } from 'react';

import './TotalCalc.scss';

const TotalCalc = () => {
  const [percent, setPercent] = useState();
  const [amount, setAmount] = useState();
  const [total, setTotal] = useState();

  return (
    <div className='total-calc'>
      <div className='total-container'>
        <input className='total-percent' type='number' placeholder='0' /> % of
        <span>
          ${' '}
          <input
            className='total-money'
            type='number'
            placeholder='Total Portfolio'
          />
        </span>
        = <span>{!total ? '$0.00' : total}</span>
      </div>
    </div>
  );
};

export default TotalCalc;
