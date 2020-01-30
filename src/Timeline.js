import React, { Component} from 'react';

import Cards from './Cards.js';



class Timeline extends Component {
  constructor() {
    super();

  }

  render() {
    return(
      <Cards username={this.props.name}
             avatar={this.props.avatarUrl}  
      />
    )
  }
}

export default Timeline;