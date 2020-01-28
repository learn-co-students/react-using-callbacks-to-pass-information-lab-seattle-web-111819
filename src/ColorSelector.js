import React, { Component } from 'react';

export default class ColorSelector extends Component {


  makeColorSwatches = () => (
    ["#F00", "#F80", "#FF0", "#0F0", "#00F", "#508", "#90D", "#FFF", "#000"].map((str, idx) => {
//6. need to write the function inside the map to access the color values needed:   ---> Cell
      let callback = () => this.props.setSelectedColor(str)
//5. update this code so that when any one of these divs is clicked the hexadecimal color value of that div becomes the selected color in Matrix.
      return <div onClick={callback} key={idx} className="color-swatch" style={{backgroundColor: str}}/>
    })
  )
    // ["#F00", "#F80", "#FF0", "#0F0", "#00F", "#508", "#90D", "#FFF", "#000"].map((str, idx) => {
    //   return <div key={idx} className="color-swatch" style={{backgroundColor: str}}/>
    // })   //Each div element is rendered from an arr of hex color strings, w/backgroundColor set to the value of the current string in the mapping process.

  render() {
    return (
      <div id="colorSelector">
        {this.makeColorSwatches()}
      </div>
    )
  }
}
