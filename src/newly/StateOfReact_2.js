/* 
State in React: - state in react will store the values. we can change or update the values through the state.

1> State is managed with in the component
2> While using state, variables are declared in the function body.
3> State can be changed.

State in FUNCTIONAL Component: - "useState"  hook is used 
State in CLASS Component: - "this.state" is used

Now we can take alook over the State in Class component.

while discussing hooks we can use the functional component.

*/

import React, { Component } from 'react'

 class StateOfReact extends Component {

    // State is managed with in the compoenent, variables declared in the function as an Object of this.state
    
    constructor(){
                   super()
                   this.state={ message:"Hi..! welcome to my home " };
                  }

    // state can be changed using this.setState

    greetingAfterVisit(){
                this.setState({message:"Thanks for visiting our home"})
                }

                 
  render() {
    return (
      <div>
        
        <button onMouseEnter={()=>this.greetingAfterVisit()} > Thank You Greeting  </button>  
    
        <h3> {this.state.message}</h3>
      </div>
    )
  }
}
export default StateOfReact
