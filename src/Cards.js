import React, { Component } from 'react';

import Avatar from './Avatar';
import Likes from './Like';
import UserName from './Username';
import Time from './Time';
import Reply from './Reply';
import Like from './Like';
import Emoji from './Emoji';
import Message from './Message';


class Cards extends Component {
  constructor(props) {
    super(props);
    console.log(props)  

    this.handleClickTransfer=this.handleClickTransfer.bind(this);
  }

  handleClickTransfer() {
    let sumLikes = this.props.post.likes + 1;
    this.props.handleAllClicks(sumLikes, this.props.post.id)
  }

  render() {
      console.log(this.props.post.name)

    const posts =
    <div className='postCard'>
      <Avatar 
        avatar={this.props.post.avatarUrl} 
      />
      <div className="rightCard">
        <div className='topItem'>
          <span id='userName'>
            <UserName
              username={this.props.post.name}
            />
          </span>
            <Time 
              update={this.props.post.date} 
            />
        </div>
        <Message 
          className='userPost'
          comment={this.props.post.comment}
        />
        <div className='bottomItem'>
          <span className='reply'>
            <Reply />
          </span>
          <span className='like'>
            <Like 
              likeCounts={this.handleClickTransfer}
              likes={this.props.post.likes}
            />
          </span>
          <span className='emoji'>
            <Emoji 
              emojis={this.props.post.emoticon}/>
          </span>
        </div>
      </div>
    </div>


    return(
      <React.Fragment>
        {posts}
      </React.Fragment>
    )
  }

}

export default Cards;








