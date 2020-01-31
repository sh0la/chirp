import React, { Component } from 'react';

class Like extends Component {
  
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    console.log(props.likes)
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
            counter={this.props.counter}
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