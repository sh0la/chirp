import React, { Component} from 'react';

import Cards from './Cards.js';



class Timeline extends Component {
  constructor() {
    super();

  }

  render() {
      const listOfPosts = this.props.stream.map(post => {
        return <Cards post={post}/>
      })

    return(
      <div>
        {listOfPosts}
      </div>
    )
  }
}

export default Timeline;