import React, { Component } from 'react';


class Postform extends Component {
  constructor() {
    super();

    this.state = {output:''};
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    
  }

  handleChange(event) {
    this.setState({output: event.target.value})
  }


  render() {
    const {output} = this.state
    console.log(output)
    return(
      <form 
        action=""
        onSubmit={this.handleSubmit}
      >
        <input 
          type="text" 
          placeholder="What's on your mind..." 
          value={output} 
          onChange={this.handleChange} 
          
               
               
        />
      </form>
    )
  }


}

export default Postform;