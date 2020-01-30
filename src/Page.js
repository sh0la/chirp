import React, { Component } from 'react';

import Header from './Header.js';
import Timeline from './Timeline.js';
import Navbar from './NavBar';
import LeftNavBar from './LeftNavBar';
import RightNavBar from './RightNavBar';
import Postform from './Postform';


class Page extends Component {
  constructor(props) {
    super(props);
    console.log(props)

    this.state = {
      dataStream: [
        {
        id: Date.now(),
        date: new Date(),
        name: 'Paul',
        avatarUrl: './images/boy.jpg',
        comment: ['hi','what is a nice', 'going to the beach'],
        likes: 0,
        emoticon: ['lol','hi','sad'],
        
      },
       {id: Date.now(),
        date: new Date(),
        name: 'Koby',
        avatarUrl: './images/cat.jpg',
        comment: ['hi','what is a nice', 'going to the beach'],
        likes: 0,
        emoticon: ['lol','hi','sad'],
      },
      { id: Date.now(),
        date: new Date(),
        name: 'Lobs',
        avatarUrl: './images/girl.jpg',
        comment: ['hi','what is a nice', 'going to the beach'],
        likes: 0,
        emoticon: ['lol','hi','sad']
      }
      ],
    }


    // this.state ={
    //   users : this.props.userArray
    // }
  }
  

  

  render() {
  //console.log(this.props.userArray)    
    return(
      <div>
        {/* <Header />
        <Navbar />
        <LeftNavBar />
        <RightNavBar />
        <Postform /> */}
        <Timeline 
          stream={this.state.dataStream}        
        />
      </div> 
    )  
    
  

  }
}


export default Page;