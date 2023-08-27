import Fragments from './components/Fragments';
import './App.css';
import FirsComponent from './components/FirstComponent';
import Hooks from './components/Hooks';
import List from './components/List'
import RenderCond from './components/RenderCond';
import Container from './components/Container';

function App() {
  return (
    <div className="App">
      <h2>Olá, react</h2>
      <FirsComponent />
      <Hooks />
      <List />
      <RenderCond x = {5} y = {10}/>
      <Fragments />
      <Container>
        <h1>Este é o filho do container</h1>
      </Container>
    </div>
  );
}

export default App;
