import React from 'react';
import UserTracker from './UserTracker';

import './Tracker.scss';

const Tracker = () => {
  const userData = {
    users: [
      { user: 'name1', percent: 20, id: 1 },
      { user: 'name2', percent: 60, id: 2 },
      { user: 'name3', percent: 20, id: 3 },
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
