import React, { Component } from 'react'
import MemoComp from './Memo_13'

export class MemoParent extends Component {
    constructor(props){
        super(props)
      
        this.state = {
           name:'vishwas'
        }
      }
      componentDidMount(){
          setInterval (()=>{this.setState({name:'vishwas'})},2000)
      }
      
      
  render() {
    return (
      <div>MemoParent
        <MemoComp name ={this.state.name}/>
      </div>
    )
  }
}

export default MemoParent