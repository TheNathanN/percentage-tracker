import './App.scss';

import Title from './components/Title';
import CalcContainer from './components/calc-comps/CalcContainer';
import Tracker from './components/Tracker';

function App() {
  return (
    <div className='App'>
      <Title />
      <main>
        <CalcContainer />
        <Tracker />
      </main>
    </div>
  );
}

export default App;
