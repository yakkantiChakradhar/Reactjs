import React, { Component } from 'react'
import FRinput from './FRinput';

class FRparentInput extends Component {
    constructor(props) {
      super(props)
         this.parentComponent = React.createRef();
    }

    clickHandler =()=>{this.parentComponent.current.focus()}
    
  render() {
    return (
      <div>
        <FRinput ref={this.parentComponent} />
        <button onClick={this.clickHandler}>click me</button>
      </div>
    )
  }
}

export default FRparentInput