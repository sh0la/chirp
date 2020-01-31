import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return (
      <nav>
        <ul className='navbar'>
          <li>Filter</li>
          <li>Sort</li>
        </ul>
      </nav>
    )
    
  }
}

export default NavBar;