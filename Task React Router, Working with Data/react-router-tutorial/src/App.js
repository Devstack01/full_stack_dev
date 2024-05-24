import React from 'react';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
       <Routes>
          <Route path='/' exact Component={Home} />
          <Route path='/about' Component={About} />
          <Route path='/contact' Component={Contact} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
