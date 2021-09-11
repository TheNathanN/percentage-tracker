import React from 'react';
import UserTracker from './UserTracker';

import styled from 'styled-components';

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
    <Container>
      <div className='tracker-container'>
        {userData['users'].map(data => (
          <UserTracker user={data.user} percent={data.percent} key={data.id} />
        ))}
      </div>
    </Container>
  );
};

export default Tracker;

//Styles

const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3rem;

  .tracker-container {
    width: 20rem;
  }
`;
