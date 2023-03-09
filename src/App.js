import './App.css';
import { About } from './components/About';
import { GlobalStyles } from './assets/styles/style';


function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <header className="App-header">
        <About></About>
      </header>
    </div >
  );
}

export default App;
