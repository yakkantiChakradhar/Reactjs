import React, { Component } from 'react'

export class RenderProps extends Component {
  render() {
    return (
      <div>{this.props.name(true)}
        {/* {this.props.name} */}
      </div>
    )
  }
}

export default RenderProps

/* 
Render props: -
The term "render props" refers to a technique for sharing code between react components using a prop whose value is a function.
*/