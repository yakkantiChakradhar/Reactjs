import React, { Component } from 'react'

class HoverRendering extends Component {
  render() {
    const {count,incrementcount}=this.props
    return (
      <div><h1 onMouseOver={incrementcount}>Hover {count} time</h1></div>
    )
  }
}

export default HoverRendering
