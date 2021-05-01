import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Home />
      </Router>
    </div>
  );
}

export default App;
