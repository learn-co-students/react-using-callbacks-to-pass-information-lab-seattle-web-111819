import React, { Component } from 'react';


export default class Cell extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }
//7. set up another click event, just like in ColorSelector, only this time, we'll use a handleClick class method  
  handleClick = () => {
    this.setState({
      color: this.props.selectedColor
    })
  }
  
  render() {
    return (
// 7.1 click listener, sends to handleClick method
      <div onClick={this.handleClick} className="cell" style={{backgroundColor: this.state.color}}>
      </div>
    )
  }
  
}