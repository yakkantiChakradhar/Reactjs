<<<<<<< HEAD
/* 
Pure Component: -
```````````````
    Based on the concept of purity in functional programming paradigms,a function is said to be pure if it means the following two conditions

    ** It's return value is only determined by it's input value

    ** It's return value is always the same for the same input values.


   React component is considered pure if it renders the same output for the same state and props. For this type of class component, React provides the pure component base class. Class component that extends the React.pureComponent class are treated as pure components.

   Pure components have some performance improvements and render optimizations.
   since React implements the shouldComponentUpdate() method for them with a shallow comparison for props and state.

   Regular Component                                                          Pure component
   ``````````````````                                     |                 ```````````````````
   A regular component does not implement the             |     A pure component on the other hand implements shouldComponentUpdate with 
   shouldComponentUpdate method. It always returns        |     shallow props and state comparison
   true by default                                        |

   Shallow comparison :-
   ``````````````````
   a (sc) b retruns true if a and b have same value and are of same type.
   
   eg:- 
   ```
   string 'vishwas' (sc) string 'vishwas' returns true.

   Complex types :-
   ``````````````

   a (sc) b returns true if a and b reference the exact same object.

   eg:-
   ```
   var a = [1,2,3];
   var b = [1,2,3];
   var c = a;

   var ab_eq = (a===b);  // false
   var ab_eq = (a===c);  // true

   ********************************
   pure components implements shouldComponentUpdate() with a shallow props and state comparison

   shallow comparison of prevState with currentState                   ________|``\
                                                                      | difference   |> Re-render component
                                                                      |_________../

   shallow comparison of prevProps with currentProps



*/


import React, { Component } from 'react'
import PureChild from './PureChile_12.1'

class PureComp extends Component {
    constructor(props){
        super(props)
      
        this.state = {
           name:'vishwas'
        }
      }
      componentDidMount(){
          setInterval (()=>{this.setState({name:'vishwas'})},2000)
      }
      
      
  render() {
    
    return (
      <div>
        parent component
        <PureChild name={this.state.name} />
      </div>
    )
  }
}

export default PureComp


/* 
SUMMARY: -
```````
* We can create a component by extending the pure component class
*A pure component implements the shouldComponentUpdate lifeCycle method by performing a shallow comparision on the props and state of the 
 component.
* If there is no difference, the component is not re-rendered performance boost.
* It is a good idea to ensure that all the children components are also dare to avoid unexpected behaviour.
* Never mutate the state. Always return a new object that reflects the new state.
=======
/* 
Pure Component: -
```````````````
    Based on the concept of purity in functional programming paradigms,a function is said to be pure if it means the following two conditions

    ** It's return value is only determined by it's input value

    ** It's return value is always the same for the same input values.


   React component is considered pure if it renders the same output for the same state and props. For this type of class component, React provides the pure component base class. Class component that extends the React.pureComponent class are treated as pure components.

   Pure components have some performance improvements and render optimizations.
   since React implements the shouldComponentUpdate() method for them with a shallow comparison for props and state.

   Regular Component                                                          Pure component
   ``````````````````                                     |                 ```````````````````
   A regular component does not implement the             |     A pure component on the other hand implements shouldComponentUpdate with 
   shouldComponentUpdate method. It always returns        |     shallow props and state comparison
   true by default                                        |

   Shallow comparison :-
   ``````````````````
   a (sc) b retruns true if a and b have same value and are of same type.
   
   eg:- 
   ```
   string 'vishwas' (sc) string 'vishwas' returns true.

   Complex types :-
   ``````````````

   a (sc) b returns true if a and b reference the exact same object.

   eg:-
   ```
   var a = [1,2,3];
   var b = [1,2,3];
   var c = a;

   var ab_eq = (a===b);  // false
   var ab_eq = (a===c);  // true

   ********************************
   pure components implements shouldComponentUpdate() with a shallow props and state comparison

   shallow comparison of prevState with currentState                   ________|``\
                                                                      | difference   |> Re-render component
                                                                      |_________../

   shallow comparison of prevProps with currentProps



*/


import React, { Component } from 'react'
import PureChild from './PureChile_12.1'

class PureComp extends Component {
    constructor(props){
        super(props)
      
        this.state = {
           name:'vishwas'
        }
      }
      componentDidMount(){
          setInterval (()=>{this.setState({name:'vishwas'})},2000)
      }
      
      
  render() {
    
    return (
      <div>
        parent component
        <PureChild name={this.state.name} />
      </div>
    )
  }
}

export default PureComp


/* 
SUMMARY: -
```````
* We can create a component by extending the pure component class
*A pure component implements the shouldComponentUpdate lifeCycle method by performing a shallow comparision on the props and state of the 
 component.
* If there is no difference, the component is not re-rendered performance boost.
* It is a good idea to ensure that all the children components are also dare to avoid unexpected behaviour.
* Never mutate the state. Always return a new object that reflects the new state.
>>>>>>> ada6e9a0e7663a75060c94cf06a5b470ad4f30fa
*/