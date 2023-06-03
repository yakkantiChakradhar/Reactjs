import React, { Component } from 'react'

class ClickRendering extends Component {
  render() {
    const {count, incrementcount}=this.props
    return (
      <div><button onClick={incrementcount}>button was clicked {count} times</button></div>
    )
  }
}

export default ClickRendering
