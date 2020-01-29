import React, { Component } from 'react';

import Page from './Page.js';



class User extends Component {
  constructor() {
    super();

    this.state = {
      users: [
        {
        name: 'Paul',
        avatarUrl: '#',
      },
       {
        name: 'Koby',
        avatarUrl: '#'
      },
      {
        name: 'Lobs',
        avatarUrl: '#'
      }
      ],
    }

  
  }

 
  

  render() {
  
    const names = this.state.users.map(name => {
      return <Page name={name}/>
    })

    return(
      <div>
        {names}
      </div>
    )
  }
}

export default User;
