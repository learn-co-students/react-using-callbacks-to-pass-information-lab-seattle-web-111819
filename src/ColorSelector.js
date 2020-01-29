import React, { Component } from 'react'

// Child component
// Cannot communicate to Cell (Sibling components cannot commmunicate with each other, only through Parent component Matrix)

// This the interface where users will be able to select a color
// ColorSelector needs to modify the selected color based on user input
// ColorSelector needs a way to set some 'selected color' in Matrix when a user selects a color (using callbacks as props)

class ColorSelector extends Component {

  makeColorSwatches = () => (
    ["#F00", "#F80", "#FF0", "#0F0", "#00F", "#508", "#90D", "#FFF", "#000"].map((str, idx) => {

      // STEP 6: need to write the function inside the map to access the color values needed:
      let callback = () => this.props.setSelectedColor(str)

      // STEP 5: when any one of these divs is clicked the hexadecimal color value of that div becomes the selected color in Matrix.
      return <div onClick={callback} key={idx} className="color-swatch" style={{backgroundColor: str}}/>
      // Each div element is rendered from an array of hexadecimal color strings
      // backgroundColor set to the value of the current string in the mapping process
    })
  )

  render() {
    return (
      <div id="colorSelector">
        {this.makeColorSwatches()}
      </div>
    )
  }
}
export default ColorSelector