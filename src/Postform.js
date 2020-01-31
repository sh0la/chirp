import React, { Component } from 'react';


class Postform extends Component {
  constructor() {
    super();

    //receive ur array of users, as props (this.props.array)

    this.state = {output:''};
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(event) {
    console.log(this.props.idStream)
    const text = this.state.output;
    event.preventDefault()
    this.props.formSubmit(text)

  }

  handleChange(event) {

    //u will  make an object id,john,avatar, message
    //push this object into ur array usersArray.push(ur new object)
    this.setState({output: event.target.value})
  }


  render() {

    return(
      <form 
        action=""
        onSubmit={this.handleSubmit}
      >
        <input 
          type="text" 
          placeholder="What's on your mind..." 
          className='message'
          value={this.state.output} 
          onChange={this.handleChange} 
          idComment={this.props.idStream}        
        />
        <input 
          className="btn"
          type="button" 
          value="Submit"/>
      </form>
    )
  }


}

export default Postform;