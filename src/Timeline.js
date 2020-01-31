import React, { Component} from 'react';

import Cards from './Cards.js';



class Timeline extends Component {
  constructor() {
    super();

    this.compileLikes=this.compileLikes.bind(this);
  }

  compileLikes(likes,id) {
    this.props.submitLikes(likes,id)

  }

  render() {
      const listOfPosts = this.props.stream.map(post => {
        return <Cards 
                  post={post}
                  handleAllClicks={this.compileLikes}
                />
      })

    return(
      <div>
        {listOfPosts}
      </div>
    )
  }
}

export default Timeline;