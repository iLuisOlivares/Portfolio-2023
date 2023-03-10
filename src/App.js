import './App.css';
import { About } from './components/About';
import { GlobalStyles } from './assets/styles/style';
import { Home } from './pages/Home';


function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <header className="App-header">
        <Home></Home>
      </header>
    </div >
  );
}

export default App;
