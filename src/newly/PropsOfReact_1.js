/*
 Props in React: - 
 ~~~~~~~~~~~~~
props are also know as properties, Where we can access this props from one component to another component through function prameters, which are immutable.

props is an optional input that accept by your component, also allows the component to be dynamic.

*/


/* 
props in Functional component: - it can be used as props.attributename, by passing the props conventionally,
~~~~~~~~~~~~~~~~~~~~~~~~~~~~
while passing parameters we can name it by any specific name which we can maintain
  */

/* import React from 'react'

function PropsOfReact(childe) {
  return (
    <div>
        <h1>hi {childe.name} also know as {childe.atName} </h1></div>
  )
} */


/////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
/*  
props in class component: - by using the convention like this.props.attributename
~~~~~~~~~~~~~~~~~~~~~~~~
we just want to access the props by this.props
*/
import React, { Component } from 'react'

 class PropsOfReact extends Component {
  render() {
    return (
      <div><h1>Hi this is {this.props.name} he is also known as {this.props.atName} </h1></div>
    )
  }
}
export default PropsOfReact

