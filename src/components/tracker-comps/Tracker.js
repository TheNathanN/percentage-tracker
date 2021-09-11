import React from 'react';
import UserTracker from './UserTracker';

import './Tracker.scss';

const Tracker = () => {
  const userData = {
    users: [
      { user: 'Doni', percent: 25, id: 1 },
      { user: 'Tony', percent: 25, id: 2 },
      { user: 'Matt', percent: 25, id: 3 },
      { user: 'Aman', percent: 25, id: 4 },
    ],
  };

  return (
    <section className='tracker'>
      <div className='tracker-container'>
        {userData['users'].map(data => (
          <UserTracker user={data.user} percent={data.percent} key={data.id} />
        ))}
      </div>
    </section>
  );
};

export default Tracker;
