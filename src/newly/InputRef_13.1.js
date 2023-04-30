import React, { Component } from 'react'

class InputRef extends Component {
    constructor(props) {
      super(props)
    
      this.inpRef = React.createRef()
    }

    focInput(){
        this.inpRef.current.focus()
    }
    
  render() {
    return (
      <div>
        <input type="text" ref={this.inpRef}></input>
      </div>
    )
  }
}

export default InputRef
