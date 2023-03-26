import './App.css';
import { About } from './components/About';
import { GlobalStyles } from './assets/styles/style';
import { Home } from './pages/Home';
import { Blog } from './pages/Blog';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <header className="App-header">
        <Header></Header>

        <Routes>
          <Route exact path='' Component={Home} />

          <Route exact path='/blog' Component={Blog} />

        </Routes>

        <Footer></Footer>
      </header>
    </div >
  );
}

export default App;
