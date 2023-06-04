import React, { Component } from 'react'
import ComponentF from './ComponentF'
import { UserContext } from "./UserContext"

class ComponentE extends Component {
  static contextType = UserContext
  render() {
    
    return (
    <div><ComponentF />
     componentE context {this.consumer}</div>
    )
    
  }
}

export default ComponentE