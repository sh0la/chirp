import React, { Component } from 'react';

import Avatar from './Avatar';
import Likes from './Likes';
import Post from './Post';
import UserName from './Username';


class Cards extends Component {
  constructor(props) {
    super(props);
    console.log(props)  
  }


  render() {
    const cards = 
        <section className="postCard">
          <div>
            <Avatar avatarUrl={this.props.avatar}/>
          </div> 
          <div className="rightCard"> 
            <div>
              <UserName stringName={this.props.username}/>
              {/* <Date />   */}
            </div>  
            <Post />
            <div>
              {/* <Like /> */}
              {/* <Comment /> */}
              {/* <Emoticon /> */}
            </div>       
          </div>
        </section>

    // const cardList = cards.map(card => {
    //   return (card)
    // })
     
    return (
      <React.Fragment>
        {cards}
      </React.Fragment>
    )
  }


}

export default Cards;








