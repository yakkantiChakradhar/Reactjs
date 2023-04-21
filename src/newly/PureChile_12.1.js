
import React, { PureComponent } from 'react'


class PureChild extends PureComponent {
  render() {
    console.log("pure component example")
    return (
      <div>
        purecomponent {this.props.name}
      </div>
    )
  }
}
export default PureChild

