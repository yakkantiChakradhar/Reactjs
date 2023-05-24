import React, { Component } from 'react'
import UpdateComponent from './WithCounter'
class ClickCounterHOC extends Component {
   /*  constructor(props) {
      super(props)
    
      this.state = {
         count: 0
        
      }
    }
    
    incrementCount=()=>{
        this.setState((prevState)=>{
            return {count:prevState.count + 1 }
        })
        } */
    
  render() {
    const {count,incrementCount,name, fname} = this.props
    return (
      <div><button onClick={incrementCount}>{fname} {name} clicked {count} times</button></div>
    )
  }
}

export default UpdateComponent(ClickCounterHOC,6)