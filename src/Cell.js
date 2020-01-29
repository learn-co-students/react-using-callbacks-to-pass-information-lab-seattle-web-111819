import React from 'react'
// import React, { Component } from 'react';

// Child component
// Cannot communicate to ColorSelector (child components cannot commmunicate with each other, only through parent component Matrix)

// Cell needs a way to know what the current selected color is when it is clicked (using callbacks as props)
// Cell only needs to know the currently selected color, not change it

class Cell extends React.Component {
  
  // "this.props.color" is used to set the initial state of the component and the state value (this.state.color) is then used to modify the background color of the returned div below
  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }

  // STEP 7: configure our Cell component so that when it is clicked, it changes color to the currently selected color.
  // setup a click event
  handleClick = () => {
    this.setState({
      color: this.props.selectedColor
    })
  }
  
  // add event handler
  render() {
    return (
      <div onClick={this.handleClick} className="cell" style={{backgroundColor: this.state.color}}>
      </div>
    )
  }
  
}

export default Cell