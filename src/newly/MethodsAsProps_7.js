/* 
Methods as props: - 

As recently we just pass the props as values from parent component to child component, preciesly we need to transfer data from child component to parent component so that we use Methods as props to transfer data from child to parent component.

mainly we use state in class component so that we can handle it more comfortable

*/

import React, { Component } from 'react'
import MethodsAs from './MethodsAsProps_7.1'

 class MethodsAsProps extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:" W I S H I N G  U A  V E R Y  Happiest birthday"
      }
      this.greetingWishes = this.greetingWishes.bind(this)
    }

    greetingWishes(childp){
        alert(`H E L L O :-) ${this.state.message} to you :-) :-) :-)  ${childp}  :-) :-):-) :-)`)
    }
    
  render() {
    return (
      <div>
        <MethodsAs greet={this.greetingWishes} />
      </div>
    )
  }
}
export default MethodsAsProps
