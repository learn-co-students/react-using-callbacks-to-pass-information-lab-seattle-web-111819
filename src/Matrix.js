import React, { Component } from 'react';
import learnSymbol from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()
    this.state = {
      selectedColor: '#FFF' //1. set default state
    }
  }
//2. updates selectedColor with whatever is passed into it as an argument.
  setSelectedColor = (newColor) => {
    this.setState({
      selectedColor: newColor
    })
  }

  genRow = (vals) => ( //4. Cell needs to know current selected color(not change it.) pass this to every Cell returned by genRow() as prop called selectedColor  --> ColorSelector
    vals.map((val, idx) => <Cell key={idx} color={val} selectedColor={this.state.selectedColor}/>)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )

  render() {
    //3. provide access to setSelectedColor. pass the needed fx down as a prop. (ColorSelector ...)
    return (
      <div id="app">
        <ColorSelector setSelectedColor={this.setSelectedColor}/> 
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }
}

Matrix.defaultProps = {
  values: learnSymbol
}