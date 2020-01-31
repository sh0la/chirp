import React, { Component } from 'react';

class Like extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    this.props.likeCounts()
  }

  render() {  
    return (
      <React.Fragment>
        <div class="counter">
          <span class="like" 
            onClick={this.handleClick} 
            likes={this.props.likes}
            key={this.props.id} 
          > Like
          </span>
            {this.props.likes}
        </div>
      </React.Fragment>
    )
  }
}



export default Like;