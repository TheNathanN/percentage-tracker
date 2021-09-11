import styled from 'styled-components';

import Title from './components/Title';
import CalcContainer from './components/calc-comps/CalcContainer';
import Tracker from './components/tracker-comps/Tracker';

function App() {
  return (
    <Container>
      <Title />
      <main>
        <CalcContainer />
        <Tracker />
      </main>
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin: 3rem 0;

  main {
    padding: 0 1rem;

    span {
      display: block;
    }
  }
`;
