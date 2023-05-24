import React, { Component } from 'react'
import UpdateComponent from './WithCounter'
class HoverCounterHOC extends Component {
  /*   constructor(props) {
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
    const {count, incrementCount, name, fname} = this.props
    
    return (
      <div><h2 onMouseOver={incrementCount}>{fname} {name} hovered {count} times</h2></div>
    )
  }
}

export default UpdateComponent(HoverCounterHOC,5)

/* 
We can make so many components as mentioned above.

In order to use more components upto 10 at that moment wee use the state in the parent component and then we pass the sate as a value to the child component.
        _________________
       | Parent Component |
        ``````````````````
               |
               |
        |```````````````````|    

clickCounter          HoverCounter

lifts counter logic to parent and pass props
****************************************************************


              parent 
                |
click counter       Random component A
                            |
                    Random component B
                            |
                    Hover counter

In this situation lifting up the state is not a great solution


*/