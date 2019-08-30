import React, { Component } from 'react';

class GiftsContainer extends Component {
  constructor(props){
    super(props);
      this.state = {
        gifts: []
      }
  }

  componentDidMount(){

  }

  render(){
    return(
      <div>
        <GiftFormContainer />
      </div>
    )
  }
}


export default GiftsContainer;
