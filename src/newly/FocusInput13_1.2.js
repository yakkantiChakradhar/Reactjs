import React, { Component } from 'react'
import InputRef from './InputRef_13.1'

 class FocusInput extends Component {
    constructor(props) {
      super(props)
    
      this.refIn = React.createRef()
    }
    clickHand = ()=>{
        this.refIn.current.focInput()
    }

  render() {
    return (<div>
        <InputRef ref={this.refIn} />
        <button onClick={this.clickHand}>click</button>
        

      </div>
    )
  }
}
export default FocusInput
