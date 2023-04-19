<<<<<<< HEAD
/* 
                                                    Life Cycle Methods
                                                    ``````````````````

1> MOUNTING phase
   ``````````````
   * constructor() function:-
     ```````````````````````
                             A special function that will get called whenever a new component is created.

                             Constructor is used for instalizing state and binding the event handlers.
                             
                             We should not use http requests in constructors, it could cause side effects.

                             While we are called our own constructor we need to use.
                             
                                    -> Super(props) it is the base call constructor.

                                    -> Constructor is also the only place where your expected to change or setState by directly overwriting this.state fields.

   * static getDerivedStateFromProps() function: -
     ``````````````````````````````````````````
        When the state of the component depends on changes in props over time.

        Set the state (this.setState is not used in this function instead return the object that represent the new state of the component)

        We should not use http requests in constructors, it could cause side effects, Fetching data from end point.
   
   
   * Render(): -
     ```````` 
        Only required method in life cycle.
        
        Reads only this.props & this.state and return JSX.

        Render function is the pure function for the given props & state to render the same UI.

        Do not change the state or interact with DOM or make ajax calls.

        Child component life cycle methods are also executed.

   * ComponentDidMount: -
     `````````````````` 
     Only used one time in the life cycle method which invokes immediately and all its children components havebeen rendered to the DOM.

     Cause side effects. Ex: - Interact with the DOM or Perform any ajax calls to load data.  

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        


*/
//mounting face example: -

/* import React, { Component } from 'react'

class LifeCycleMethods extends Component {

constructor(props){
  super(props)
  this.state = { name:"kiran"}

  console.log("this is Constructor function in mounting face");
}

static getDerivedStateFromProps(props, state){
  console.log("Derived state A");
  return null ;

}

componentDidMount(){
  console.log("component did mount A");
}

  render() {
    console.log("this is render function A")

    return (
      <div>LifeCycleMethods</div>
    )
  }
}


export default LifeCycleMethods */

/* 
2) UPDATING phase: -
   ``````````````
   * static getDerivedStateFromProps(props,state): -
     ````````````````````````````````````````````
      This method is called when ever the component is re-rendered.

      Set the state (this.setState is not used in this function instead return the object that represent the new state of the component)
    
      This method is used when the state is depends on the props of the component.

      Do not use any side effects. Ex:- HTTP requests

   * shouldComponentUpdate(nextProps, nextStates): -
     ````````````````````````````````````````````
        This method receives the updated props or state, and the purpose this method is clear from its name.

        Dicateds if the component should re-render or not

        performance Optimization

        Do not cause side effects. Ex:- HTTP requests or calling the setState method
        
   * Render(): -
     ```````` 
        Only required method in life cycle.
        
        Reads only this.props & this.state and return JSX.

        Render function is the pure function for the given props & state to render the same UI.

        Do not change the state or interact with DOM or make ajax calls.

        Child component life cycle methods are also executed.


   * getSnapShotBeforeUpdate(prevProps,prevState): -
     ````````````````````````````````````````````
     Called before the changes from the virtual DOM are to be reflected in the DOM.

     Capture some information from the DOM.

     Method will either return null or return a value. Returned value will be paused as the third parameter to the next method.


   * componentDidUpdate: -
     ``````````````````
     called after the render is finished in the re-rendering cycle.

     cause side effects.

*/
import React, { Component } from 'react'
import LifeCycl from './LifeCycle_B';

class LifeCycleMethods extends Component {

constructor(props){
  super(props)
  this.state = { name:"kiran"}

  console.log("this is Constructor function in mounting face");
}

static getDerivedStateFromProps(props, state){
  console.log("Derived state A");
  return null ;

}

shouldComponentUpdate(){
 console.log("should component update A");
 return true;
}

getSnapshotBeforeUpdate(prevProps,prevState){
  console.log('life cycle get snapshot before update A')
  return null;
}

componentDidMount(){
  console.log("component did mount A");
}

componentDidUpdate(){
  console.log("life cycle component did update A")
}
eventUpdate = ()=>{this.setState({name:"kiss her"})}

  render() {
    console.log("this is render function A")

    return (
      <div>LifeCycleMethods
        <button onClick={this.eventUpdate} >click me to update</button>
        <LifeCycl />
      </div>
      
    )
  }


}


export default LifeCycleMethods

/* 
3> UNMOUNTING PHASE: -
   ````````````````
     * ComponentWillUnmount(): -
       `````````````````````` 
                 This method is invoked immediately, a component is unmounted and destroyed.
                 
                 Cancelling any network requests, removing event hanleres, cancelling any subscriptions and also invalidating timers.

                 Do not call the setState method.

4> ERROR HANDLING: -
   ``````````````
       * Static getDerivedStateFromError(error): -
         ``````````````````````````````````````
         When there is an error either during rendering, in a lifecycle methods or in the constructor of any childcomponent

       * componentDidCatch(error,info)
=======
/* 
                                                    Life Cycle Methods
                                                    ``````````````````

1> MOUNTING phase
   ``````````````
   * constructor() function:-
     ```````````````````````
                             A special function that will get called whenever a new component is created.

                             Constructor is used for instalizing state and binding the event handlers.
                             
                             We should not use http requests in constructors, it could cause side effects.

                             While we are called our own constructor we need to use.
                             
                                    -> Super(props) it is the base call constructor.

                                    -> Constructor is also the only place where your expected to change or setState by directly overwriting this.state fields.

   * static getDerivedStateFromProps() function: -
     ``````````````````````````````````````````
        When the state of the component depends on changes in props over time.

        Set the state (this.setState is not used in this function instead return the object that represent the new state of the component)

        We should not use http requests in constructors, it could cause side effects, Fetching data from end point.
   
   
   * Render(): -
     ```````` 
        Only required method in life cycle.
        
        Reads only this.props & this.state and return JSX.

        Render function is the pure function for the given props & state to render the same UI.

        Do not change the state or interact with DOM or make ajax calls.

        Child component life cycle methods are also executed.

   * ComponentDidMount: -
     `````````````````` 
     Only used one time in the life cycle method which invokes immediately and all its children components havebeen rendered to the DOM.

     Cause side effects. Ex: - Interact with the DOM or Perform any ajax calls to load data.  

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        


*/
//mounting face example: -

/* import React, { Component } from 'react'

class LifeCycleMethods extends Component {

constructor(props){
  super(props)
  this.state = { name:"kiran"}

  console.log("this is Constructor function in mounting face");
}

static getDerivedStateFromProps(props, state){
  console.log("Derived state A");
  return null ;

}

componentDidMount(){
  console.log("component did mount A");
}

  render() {
    console.log("this is render function A")

    return (
      <div>LifeCycleMethods</div>
    )
  }
}


export default LifeCycleMethods */

/* 
2) UPDATING phase: -
   ``````````````
   * static getDerivedStateFromProps(props,state): -
     ````````````````````````````````````````````
      This method is called when ever the component is re-rendered.

      Set the state (this.setState is not used in this function instead return the object that represent the new state of the component)
    
      This method is used when the state is depends on the props of the component.

      Do not use any side effects. Ex:- HTTP requests

   * shouldComponentUpdate(nextProps, nextStates): -
     ````````````````````````````````````````````
        This method receives the updated props or state, and the purpose this method is clear from its name.

        Dicateds if the component should re-render or not

        performance Optimization

        Do not cause side effects. Ex:- HTTP requests or calling the setState method
        
   * Render(): -
     ```````` 
        Only required method in life cycle.
        
        Reads only this.props & this.state and return JSX.

        Render function is the pure function for the given props & state to render the same UI.

        Do not change the state or interact with DOM or make ajax calls.

        Child component life cycle methods are also executed.


   * getSnapShotBeforeUpdate(prevProps,prevState): -
     ````````````````````````````````````````````
     Called before the changes from the virtual DOM are to be reflected in the DOM.

     Capture some information from the DOM.

     Method will either return null or return a value. Returned value will be paused as the third parameter to the next method.


   * componentDidUpdate: -
     ``````````````````
     called after the render is finished in the re-rendering cycle.

     cause side effects.

*/
import React, { Component } from 'react'
import LifeCycl from './LifeCycle_B';

class LifeCycleMethods extends Component {

constructor(props){
  super(props)
  this.state = { name:"kiran"}

  console.log("this is Constructor function in mounting face");
}

static getDerivedStateFromProps(props, state){
  console.log("Derived state A");
  return null ;

}

shouldComponentUpdate(){
 console.log("should component update A");
 return true;
}

getSnapshotBeforeUpdate(prevProps,prevState){
  console.log('life cycle get snapshot before update A')
  return null;
}

componentDidMount(){
  console.log("component did mount A");
}

componentDidUpdate(){
  console.log("life cycle component did update A")
}
eventUpdate = ()=>{this.setState({name:"kiss her"})}

  render() {
    console.log("this is render function A")

    return (
      <div>LifeCycleMethods
        <button onClick={this.eventUpdate} >click me to update</button>
        <LifeCycl />
      </div>
      
    )
  }


}


export default LifeCycleMethods

/* 
3> UNMOUNTING PHASE: -
   ````````````````
     * ComponentWillUnmount(): -
       `````````````````````` 
                 This method is invoked immediately, a component is unmounted and destroyed.
                 
                 Cancelling any network requests, removing event hanleres, cancelling any subscriptions and also invalidating timers.

                 Do not call the setState method.

4> ERROR HANDLING: -
   ``````````````
       * Static getDerivedStateFromError(error): -
         ``````````````````````````````````````
         When there is an error either during rendering, in a lifecycle methods or in the constructor of any childcomponent

       * componentDidCatch(error,info)
>>>>>>> ada6e9a0e7663a75060c94cf06a5b470ad4f30fa
   */