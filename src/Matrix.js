import React, { Component } from 'react'
import learnSymbol from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

// Matrix (Parent component) keeps track of the current selected color
// Work from the 'top' layer down

// DELIVERABLES:
// A way for Matrix to keep track of the selected color (think state!)
// A method that takes in a single argument of a hexadecimal color string (i.e. '#fff') and sets the selected color to that

// figure out how to use the component's state
// how to use the method that will update that state, in the ColorSelector and Cell components

class Matrix extends React.Component {

  constructor() {
    super()
    // STEP 1: Set up state with a default color ("#FFF") to keep track of selected color
    this.state = {
      selectedColor: "#FFF"
    }
  }

  // STEP 2: Add a method to update the state value:
  // this method updates selectedColor with whatever is passed into it as an argument
  setSelectedColor = (newColor) => {
    this.setState({
      selectedColor: newColor
    })
  }

  // returns a collection of Cell components
  // STEP 4: Pass currently selected color in to every Cell returned by genRow() as a prop called selectedColor 
  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} selectedColor={this.state.selectedColor} />)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )

  render() {
    return (
      <div id="app">
      {/* ColorSelector is the interface where users will be able to select a color, so it will need access to setSelectedColor */}
      {/* STEP 3: Pass data and callbacks to Children by passing the needed function down as a prop: */}
        <ColorSelector setSelectedColor={this.setSelectedColor} />
        <div id="matrix">
        {/* Remember that when using arrow functions, you can use parentheses instead of curly braces to implicitly return a value */}
          {this.genMatrix()}
        </div>
      </div>
    )
  }
}

Matrix.defaultProps = {
  values: learnSymbol
}

export default Matrix