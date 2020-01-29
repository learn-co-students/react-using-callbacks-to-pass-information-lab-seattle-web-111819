import React, { Component } from 'react'

// Child component
// Cannot communicate to ColorSelector (Sibling components cannot commmunicate with each other, only through Parent component Matrix)

// Cell needs a way to know what the current selected color is when it is clicked (using callbacks as props)
// Cell only needs to know the currently selected color, not change it

class Cell extends Component {
  
  // "this.props.color" is used to set the initial state of the component and the state value (this.state.color) is then used to modify the background color of the returned div below
  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }

  // STEP 7: setup a click event so that when it is clicked, it changes color to the currently selected color
  handleClick = () => {
    this.setState({
      color: this.props.selectedColor
    })
  }
  
  // STEP 8: add event handler to listen for click event
  render() {
    return (
      <div onClick={this.handleClick} className="cell" style={{backgroundColor: this.state.color}}>
      </div>
    )
  }
  
}

export default Cell