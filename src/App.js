import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import PagesComp from './pages/pages.index';

function App() {
  return (
    <Router>
        <PagesComp />
    </Router>
  );
}

export default App;
