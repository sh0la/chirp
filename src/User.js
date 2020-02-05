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
       {
        id:2,
        name: 'Koby',
        avatarUrl: './images/cat.jpg'
      },
      {
        id:3,
        name: 'Lobs',
        avatarUrl: './images/girl.jpg'
      },
      {
        id:4,
        name: 'Theresa',
        avatarUrl: './images/cat.jpg'
      },
      {
        id:5,
        name: 'Quinn',
        avatarUrl: './images/boy.jpg'
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

    // return( 
    //   <div>
    //     {userList}
    //     <Page userArray ={this.state.users} />
    //   </div>
    // )
    return(
      <div>
        <p>Select a user: </p>
        <select name="" id="">
          <option value="Paul">
            Paul
          </option>
          <option value="Paul">
            Lobs
          </option>
          <option value="Koby">
            Koby
          </option>
          <option value="Theresa">
            Theresa
          </option>
          <option value="Quinn">
            Quinn
          </option>
        </select>
      </div>
      
    )
  }
}

export default User;

