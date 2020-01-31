import React, { Component } from 'react';

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.handleClick=this.handleClick.bind(this)
  }


  handleClick() {
  this.props.handleSort()
  }

  render() {
    return (
      <nav>
        <ul className='navbar'>
          <li><a href="http://"></a> Filter</li>
          <li>
            <a href="#"
               onClick={this.handleClick}>Sort by Likes</a>
          </li>
        </ul>
      </nav>
    )
    
  }
}

export default NavBar;