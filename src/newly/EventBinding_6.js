/* 
Event Binding: - Event binding is used to purely understand of "THIS" keyword works

Event binding is done in the context if react components
*/
import React, { Component } from 'react'

class EventBinding extends Component {
    constructor(props){
        super(props)
        this.state={
            message:"Happy Birthday"
        }
        // 3> this.clickHandle = this.clickHandle.bind(this)
    }

   /*  clickHandle(){
        // this.setState({message:"Hearty congratulations"})
        console.log(this)              // undefine, This keyword with in our event handler is undefined
    } */


// bind Keyword and event handler

/* clickHandle(){
    this.setState({message:"Hearty congratulations"})
} */

clickHandle = ()=>{this.setState({message:"Hearty congratulations"})}

  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        {/* 1> <button onClick={this.clickHandle.bind(this)}>click</button> */}
       {/* 2> <button onClick={()=>this.clickHandle()}>click</button> */}
       {/* 3,4> <button onClick={this.clickHandle}>click</button> */}
      </div>
    )
  }
}

/// 2> event binding through the arrow function in the render method, simply calling the event handler function in the event body

// 3> Binding the event handler in the constructor host to binding in the render method

export default EventBinding
