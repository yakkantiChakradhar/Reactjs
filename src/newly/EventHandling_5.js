/* 
Event Handling: -
Now a days UI is more in software field, so for UI we need events to handle

DON't: - 
we should not add the paranthesis while we add the event to something, if we add paranthesis it will be like calling back the function
*/
////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// 1> Event handling in functional component: -

/* import React from 'react'

function EventHandling() {
    function clickHandler(){document.write("button was clicked");}
  return (
    <div>
      <button onClick={clickHandler}>click me</button>
    </div>
  )
} */

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

// 2> Event handling in the class component
import React, { Component } from 'react'

class EventHandling extends Component {
    clickHandler(){
        document.write("button was clicked");
    }
  render() {
    return (
      <div><button onClick={this.clickHandler}>click me</button></div>
    )
  }
}




export default EventHandling