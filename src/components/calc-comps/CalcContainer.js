import React, { useState } from 'react';
import PercCalc from './PercCalc';
import TotalCalc from './TotalCalc';

import './CalcContainer.scss';

const CalcContainer = () => {
  const [calc, setCalc] = useState('total');

  return (
    <section className='calc-section'>
      <div className='calc-options'>
        <h3 onClick={() => setCalc('total')}>
          Total <span>Calculator</span>
        </h3>
        <h3 onClick={() => setCalc('percent')}>
          Percent <span>Calculator</span>
        </h3>
      </div>
      <div className='calc-container'>
        {calc === 'total' && <TotalCalc />} {calc === 'percent' && <PercCalc />}
      </div>
    </section>
  );
};

export default CalcContainer;
