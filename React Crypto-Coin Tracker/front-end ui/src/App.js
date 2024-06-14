import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import './Styles/Dashboard.css';
import Navigation from './components/Navigation';
import WatchList from './components/WatchList';

function App() {
  return (
    <div className="App">
      <Router>
      <Navigation/>
      {/* <Dashboard/> */}
      <Routes>
        <Route path='/' element={<Dashboard/>}></Route>
        <Route path='/watchlist' element={<WatchList/>}/>
        <Route path='*' element={<div>Not Found!</div>} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
