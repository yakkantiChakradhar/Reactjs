/* 
setState in React: - 
~~~~~~~~~~~~~~~~

set state is used to change the state. By using set state updating of state can be easily possible.
*/

/* 
Don't :-
~~~~~
1> Always make use of setState and never modify the state directly.

   eg: -
   class SetStateOfReact extends Component {
    constructor(){
        super()
        this.state={
            count:0
        }
    }
    increament(){
   ------->     this.state.count = this.state.count + 1;    <----------- we shouldn't use this way
    }


2) To chect the modified values we should not use the next process we jus want to maintain the second parameter in the setState value itself

eg:- 
increamentUpdating(){

        this.setState({count: this.state.count+1})

     ------------------>   console.log({this.state.count})            <----------- we shouldn't use this way

 */

import React, { Component } from 'react'

 class SetStateOfReact extends Component {
    constructor(){
        super()
        this.state={
            count:0
        }
    }
    increamentUpdating(){
        // 1) We always want to update the state by using the setState itslef 
        this.setState({count: this.state.count+1})
       // 2) we always want to check it by using second parameter as call back function
       this.setState({count: this.state.count+1},()=>console.log("callback value",this.state.count))
    }
    resetTo(){
        this.setState({count: 0})
    }


  render() {
    return (
    <div>
      <div>count - {this.state.count}</div><br />
      <button onClick={()=>this.increamentUpdating()}>increase</button>
      <button onClick={()=>this.resetTo()}>reset</button>
    </div>
    )
  }
}

export default SetStateOfReact
