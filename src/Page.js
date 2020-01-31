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
        avatarUrl: require('./images/boy.jpg'),
        comment:  'going to the beach',
        likes: 0,
        emoticon: [' :-) ', ' :/ ', ' :( ', ' :| '],
        
      },
       {id: Date.now(),
        date: new Date(),
        name: 'Koby',
        avatarUrl: require('./images/cat.jpg'),
        comment: 'wash the face',
        likes: 0,
        emoticon: [' :-) ', ' :/ ', ' :( ', ' :| '],
      },
      { id: Date.now(),
        date: new Date(),
        name: 'Lobs',
        avatarUrl: require('./images/girl.jpg'),
        comment: ['sending mails','Christmas is fun', 'Dinner almost ready'],
        likes: 0,
        emoticon: [' :-) ', ' :/ ', ' :( ', ' :| '],
      }
      ],
    }

    this.addLikes=this.addLikes.bind(this);
    this.addMessage=this.addMessage.bind(this);
  }

  addMessage(comment) {
    
    let newPost = {
      id: Date.now(),
      date: new Date(),
      name: 'Lobs',
      avatarUrl: require('./images/girl.jpg'),
      comment: '',
      likes: 0,
      emoticon: [' :-) ', ' :/ ', ' :( ', ' :| ']
    }

    newPost.comment = comment;
    let posts =  [...this.state.dataStream]
    posts.unshift(newPost)
    
    this.setState({dataStream: posts})
  }

  
  addLikes(likes, id) {
    let posts = [...this.state.dataStream]
    
    posts.forEach((post) => {
      if(post.id === id) {
        Object.assign(post, {likes: likes})
      }
    })
    this.setState({dataStream: posts})
  }

  render() {
    return(
      <div>
        <Header headerStream={this.state.dataStream}/>
        <Navbar navStream={this.state.dataStream}/>
        <LeftNavBar leftStream={this.state.dataStream}/>
        <RightNavBar rightStream={this.state.dataStream}/>
        <Postform formSubmit={this.addMessage}
                  idStream={this.state.dataStream}
        />
        <Timeline 
          stream={this.state.dataStream} 
          submitLikes={this.addLikes}       
        />
      </div> 
    )  
  }
}


export default Page;