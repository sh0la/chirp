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
    console.log(props)
    // this.state ={
    //   users : this.props.userArray
    // }
  }
  

  

  render() {
  console.log(this.props.userArray)    
    return(<div></div>)
      {/* <div>
        <Header />
        <Navbar />
        <LeftNavBar />
        <RightNavBar />
        <Postform />
        <Timeline name={this.props.name}
                  avatarUrl={this.props.avatar}
        />
      </div> */}
      
    
  

  }
}


export default Page;