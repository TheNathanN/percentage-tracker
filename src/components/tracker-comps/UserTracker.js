import React from 'react';

import './UserTracker.scss';

const UserTracker = ({ user, percent }) => {
  return (
    <div>
      <h3>{user}</h3>
      <h3>{percent}</h3>
    </div>
  );
};

export default UserTracker;
