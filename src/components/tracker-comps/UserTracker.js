import React from 'react';

import styled from 'styled-components';

const UserTracker = ({ user, percent }) => {
  return (
    <Container className='user-container'>
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
    </Container>
  );
};

export default UserTracker;

const Container = styled.div`
  .user-container {
    margin-bottom: 1rem;
  }

  .tracker-labels {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
  }

  input[type='range'] {
    width: 100%;
    height: 1rem;
    background-color: #253f65;
    appearance: none;
  }
`;
