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
    
    this.state = {
      dataStream: [
        {
        id: Date.now() - 100,
        date: new Date(),
        name: 'Paul',
        avatarUrl: require('./images/boy.jpg'),
        comment:  'going to the beach',
        reply: ['sending mails','Christmas is fun', 'Dinner almost ready'],
        likes: 0,
        emoticon: [' :-) ', ' :/ ', ' :( ', ' :| '],
        
      },
       {id: Date.now() - 200,
        date: new Date(),
        name: 'Koby',
        avatarUrl: require('./images/cat.jpg'),
        comment: 'wash the face',
        reply: ['everyday','Where are you going?', 'with?'],
        likes: 0,
        emoticon: [' :-) ', ' :/ ', ' :( ', ' :| '],
      },
      { id: Date.now() - 300,
        date: new Date(),
        name: 'Lobs',
        avatarUrl: require('./images/girl.jpg'),
        comment: 'Potassium diclorate is really awesome if you really can spend more time evaluating it',
        reply: ['anything is fine, really','Sing it', 'lol'],
        likes: 0,
        emoticon: [' :-) ', ' :/ ', ' :( ', ' :| '],
      },
      {id: Date.now() - 400,
        date: new Date(),
        name: 'Theresa',
        avatarUrl: require('./images/cat.jpg'),
        comment: 'The French team are going to win the World Cup',
        reply: ['Easy peasy','That is not fun', 'Oui Oui'],
        likes: 0,
        emoticon: [' :-) ', ' :/ ', ' :( ', ' :| '],
      },
      { id: Date.now() - 500,
        date: new Date(),
        name: 'Quinn',
        avatarUrl: require('./images/girl.jpg'),
        comment: 'I dunno what to say',
        reply: ['really?','Tell that to Becker', 'ding dong'],
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
      reply: ['Easy peasy','That is not fun', 'Oui Oui'],
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
        <main>
          <LeftNavBar leftStream={this.state.dataStream}/>
          <div>
            <Postform formSubmit={this.addMessage}
                      idStream={this.state.dataStream}
            />
            <Timeline 
              stream={this.state.dataStream} 
              submitLikes={this.addLikes}       
            />
          </div>
          <RightNavBar rightStream={this.state.dataStream}/>
        </main>
        
      </div> 
    )  
  }
}

export default Page;