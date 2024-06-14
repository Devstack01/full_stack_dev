import React from 'react'
import {Link} from 'react-router-dom';
const Navigation = () => {
  return <>
  <nav className='navigation-container'>
    <ul>
    <li>
      <Link to="/">Dashboard</Link>
    </li>
    <li>
      <Link to="watchlist">Watchlist</Link>
    </li>
    </ul>
  </nav>
  </>
}

export default Navigation;