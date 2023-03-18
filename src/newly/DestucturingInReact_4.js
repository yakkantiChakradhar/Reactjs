/* 
Destructuring in React: -

Destructuring works on Props and state of the Components 

Destucturing is a ES6 feature where we can unpack valus from arrays (or) properties from objects into distinct variables.

In react destructuring props and state improves code readability.


*/

/* 
 Destructuring in FUNCTIONAL Component: -
 ``````````````````````````````````````
 ````````````````````````````````````

 there are two ways of destructuring in functional component
 
 1> Destructuring in the parameters

 2> Destructuring in the function body 
*/

// 1> Destructuring in the parameters
                                                                                               

/* import React from 'react'

 function DestucturingInReact({name, firstName}) {
  return (
    <div>
        
        
        <h1>Hi {name} {firstName}</h1>
      
    </div>
  )
} */

// 2> Destucturing in the body

/* import React from 'react'

 function DestucturingInReact(props) {
  const {name, firstName} = props
  return (
    <div>
        
        
        <h1>Hi {name} {firstName}</h1>
      
    </div>
  )
} */

/* 
Destructuring in the class component: -
````````````````````````````````````
````````````````````````````````````
destructuring the class component can be done to the props and state of the class components 


*/

// 1> Destructuring the props in class component
/* 
import React, { Component } from 'react'

class DestucturingInReact extends Component {
   
  render() {
    const {name, firstName} = this.props;
    return (<div>Hi {name} {firstName}</div>)

}
} */

// 2> Destructuring the state in class component

import React, { Component } from 'react'

class DestucturingInReact extends Component {
    constructor(props){
        super(props)
        this.state={name:"kiran",firstName:"kiranmai"}
    }
   
  render() {
    const {name, firstName} = this.state;
   
    return (<div>Hi {firstName} {name}</div>)

}
}

export default DestucturingInReact