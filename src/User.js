import React, { Component } from 'react';

import Page from './Page.js';



class User extends Component {
  constructor() {
    super();

    this.state = {
      users: [
        {
          id:1,
        name: 'Paul',
        avatarUrl: './images/boy.jpg',
        
      },
       {id:2,
        name: 'Koby',
        avatarUrl: './images/cat.jpg'
      },
      {id:3,
        name: 'Lobs',
        avatarUrl: './images/girl.jpg'
      }
      ],
    }

  }

  render() {
      //const [name, avatarUrl] = this.state.users;
      //console.log(name)
      const userslist = this.state.users;
      
      const userList = userslist.map(user => {
        return (
          <div>
            <li>{user.id}</li>
            <li>{user.name}</li>
          </div>
          
        )
      })

    return( <div>{userList}
    <Page userArray ={this.state.users} />
      </div>
    )
  }
}

export default User;
