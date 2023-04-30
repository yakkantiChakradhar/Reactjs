/* 
Reference in React: -
``````````````````
To access DOM nodes directly with in the REACT

Refs can be created in two ways 
1> By creating reference 
2> by call back reference

To make references 3 steps are used to do
    * Creating reference
    * Attaching references to the nodes
    * Call the focus elements
*/

import React, { Component } from 'react'

 class ReactRefs extends Component {
  constructor(props) {
    super(props)
  
   //1)this.compInput = React.createRef();

   this.cbRef = null;
   this.setcbRef = element =>{this.cbRef = element}
  }
  componentDidMount(){
   /* 
   1> this.compInput.current.focus()
    console.log(this.compInput) */

    if(this.cbRef){
      this.cbRef.focus()
    }
  }
  /* clickHandler = ()=> {
    alert(this.compInput.current.value)
  } */
  
  render() {
    return (

      <div>
        {/* <input type='text' ref={this.compInput}></input> */}
        <input type='text' ref={this.setcbRef}></input>
        <button onClick={this.clickHandler} >click me</button>
        </div>
    )
  }
}

export default ReactRefs

