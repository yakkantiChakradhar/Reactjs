import React from "react";

const UpdateComponent = (OriginalComponent, incrementMember) =>{
    class NewComponent extends React.Component{
        constructor(props) {
            super(props)
          
            this.state = {
               count: 0
              
            }
          }
          
          incrementClick=()=>{
              this.setState((prevState)=>{
                  return {count:prevState.count + incrementMember }
              })
              }
        render(){
            return <OriginalComponent count={this.state.count} name="chakradhar" incrementCount={this.incrementClick} {...this.props}/>
        }
    }
    return NewComponent
}
export default UpdateComponent