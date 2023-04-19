import React, { Component } from 'react'

class LifeCycl extends Component {

constructor(props){
  super(props)
  this.state = { name:"kiran"}

  console.log("this is Constructor function in mounting face");
}

static getDerivedStateFromProps(props, state){
  console.log("Derived state B");
  return null ;

}

shouldComponentUpdate(){
 console.log("should component update B");
 return true;
}

getSnapshotBeforeUpdate(prevProps,prevState){
  console.log('life cycle get snapshot before update B')
  return null;
}

componentDidMount(){
  console.log("component did mount B");
}

componentDidUpdate(){
  console.log("life cycle component did update B")
}
eventUpdate = ()=>{this.setState({name:"kiss her"})}

  render() {
    console.log("this is render function B")

    return (
      <div>LifeCycleMethods _ B
       
      </div>
      
    )
  }


}


export default LifeCycl