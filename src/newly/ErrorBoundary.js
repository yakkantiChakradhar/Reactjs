/* 
Error Boundaries: -
````````````````
** Error boundaries are react components that catch javascript error in their child component tree, log those errors and display a fall-back UI.

** A class component becomes an error boundary by defining either or both of getDerivedStateFromError and componentDidCatch life cycle methods

** The placement of errror boundaries is also matter as it contains if the entire app should have the fall-back UI or just the component causing the problem

** Provide a way to gracefully handle error in application code.
*/
import React, { Component } from 'react'

class ErrorBoundary extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         hasError: false
      }
    }
    static getDerivedStateFromError(error){
        return{hasError:true}
    }
    componentDidCatch(error,info){
        console.log(error);
        console.log(info);
    }
    
  render() {
    if(this.state.hasError){
        return <h1>Something went wrong</h1>
    }else{
return this.props.children
    }
    
  }
}

export default ErrorBoundary


