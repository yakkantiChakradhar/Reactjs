<<<<<<< HEAD
/* 
Conditional Rendering :-
1> if/else
2> Element Variable
3> Ternary conditional operator
4> Short circuit operator
*/

//  1> If/else conditional rendering

import React, { Component } from 'react'

class ConditionalRendering extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn:true
      }
    }
    
  render() {


    /*1>  If/else conditional rendering: - 

    Conditional rendering if/else statement is used inside the condition jsx is used inside the conditional rendering    
    if(this.state.isLoggedIn){
        return (
            <div>Welcome Vishwas</div>
        )
    }else {
        return(
            <div>Welcome siva</div>
        )
    } */


    /* 
    2> Element variable
    
    let message
    if(this.state.isLoggedIn){
        message = <div>Welcome shiva</div>
    }else{
        message = <div> welcome daniel</div>
    }

    return <div>{message}</div> */

   /* 3> Ternary conditional operator

   return (
        this.state.isLoggedIn ? <div>Welcome shiva</div> : <div>welcome daniel</div>
    ) */
/* 4> short circuit*/

    return this.state.isLoggedIn && <div>Welcome vishwas</div>

  }
}
export default ConditionalRendering
=======
/* 
Conditional Rendering :-
1> if/else
2> Element Variable
3> Ternary conditional operator
4> Short circuit operator
*/

//  1> If/else conditional rendering

import React, { Component } from 'react'

class ConditionalRendering extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn:true
      }
    }
    
  render() {


    /*1>  If/else conditional rendering: - 

    Conditional rendering if/else statement is used inside the condition jsx is used inside the conditional rendering    
    if(this.state.isLoggedIn){
        return (
            <div>Welcome Vishwas</div>
        )
    }else {
        return(
            <div>Welcome siva</div>
        )
    } */


    /* 
    2> Element variable
    
    let message
    if(this.state.isLoggedIn){
        message = <div>Welcome shiva</div>
    }else{
        message = <div> welcome daniel</div>
    }

    return <div>{message}</div> */

   /* 3> Ternary conditional operator

   return (
        this.state.isLoggedIn ? <div>Welcome shiva</div> : <div>welcome daniel</div>
    ) */
/* 4> short circuit*/

    return this.state.isLoggedIn && <div>Welcome vishwas</div>

  }
}
export default ConditionalRendering
>>>>>>> ada6e9a0e7663a75060c94cf06a5b470ad4f30fa
