import React from 'react';

import './UserTracker.scss';

const UserTracker = ({ user, percent }) => {
  return (
    <div className='user-container'>
      <div className='tracker-labels'>
        <p> {user} </p>
        <p> {percent}% of portfolio</p>
      </div>
      <input
        type='range'
        name='percent'
        id='percentage'
        min='0'
        max='100'
        value={percent}
        readOnly
      />
    </div>
  );
};

export default UserTracker;
