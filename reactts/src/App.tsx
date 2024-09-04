import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Todo from './Components/Todo';
import Counter from './Components/Counter';
import Params from './Components/Params';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <nav className="navbar">
        <ul className="nav-links">
          <li><Link to="/Home" className="nav-link">Home</Link></li>
          <li><Link to="/Todo" className="nav-link">Todo</Link></li>
          <li><Link to="/Counter" className="nav-link">Counter</Link></li>
          <li><Link to="/Params/1/Hello" className="nav-link">Params</Link></li>
        </ul>
      </nav>
      <main className="content">
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Todo" element={<Todo />} />
          <Route path="/Counter" element={<Counter />} />
          <Route path="/Params/:id/:message" element={<Params />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
