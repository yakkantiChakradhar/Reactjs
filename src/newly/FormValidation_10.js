<<<<<<< HEAD
/* 
Form Validation: - how capture input from form elements, such as INPUT, TEXTAREA, SELECT tag and have the data availabe for form submission

In normal, HTML form elements are resposible on there own, to handle the user Input and update the values

but in REACT we want to control the form elements.
*/

// To control the form elements we have to work with 3 steps.

/* 
1> Adding FROM elements in the RCE(react class envirment): -
   ``````````````````````````````````````````````````````
   <input type="text" value={} onChange={} />

2> Assigning the component state: - 
   ``````````````````````````````
   while assigning the state the object key value should be empty.

   this.state = { userName: " " }

   <input type="text" value={this.state.userName} onChange={} />


3> Assign the changeHandler to the state: - 
   `````````````````````````````````````
   this.state = { userName: " " }

   changeUsernameHandle = event =>{ this.setState({ userName: event.target.value }) }

   <input type="text" value={this.state.userName} onChange={this.changeUsernameHandle} />

*/

import React, { Component } from 'react'

class FormValidation extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         userName: '',
         textArea: '',
         topic: ""
      }
    }
    userChangeHandler = event =>{this.setState({userName: event.target.value})}
    textChangeHandler = event =>{this.setState({textArea: event.target.value})}
    topicChangeHandler = event => {this.setState({topic: event.target.value})}
    
    handleSubmit = event => {
        alert(`${this.state.userName} ${this.state.textArea} ${this.state.topic}`) 
        event.preventDefault()
}
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <div>
                <label>UserName:</label>
                <input type='text' value={this.state.userName} onChange={this.userChangeHandler} />
            </div><br />

            <div>
                <label>TextArea:</label>
                <textarea value={this.state.textArea} onChange={this.textChangeHandler} />
            </div><br />

            <div>
                <label>topic:</label>
                <select value={this.state.topic} onChange={this.topicChangeHandler}>
                    <option value="React">React</option>
                    <option value="VUE">VUE</option>
                    <option value="Angular">Angular</option>
                </select>
            </div><br />

            <div>
                <button type='submit'>Submit</button>
            </div>

             </form>
    </div>
    )
  }
}

=======
/* 
Form Validation: - how capture input from form elements, such as INPUT, TEXTAREA, SELECT tag and have the data availabe for form submission

In normal, HTML form elements are resposible on there own, to handle the user Input and update the values

but in REACT we want to control the form elements.
*/

// To control the form elements we have to work with 3 steps.

/* 
1> Adding FROM elements in the RCE(react class envirment): -
   ``````````````````````````````````````````````````````
   <input type="text" value={} onChange={} />

2> Assigning the component state: - 
   ``````````````````````````````
   while assigning the state the object key value should be empty.

   this.state = { userName: " " }

   <input type="text" value={this.state.userName} onChange={} />


3> Assign the changeHandler to the state: - 
   `````````````````````````````````````
   this.state = { userName: " " }

   changeUsernameHandle = event =>{ this.setState({ userName: event.target.value }) }

   <input type="text" value={this.state.userName} onChange={this.changeUsernameHandle} />

*/

import React, { Component } from 'react'

class FormValidation extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         userName: '',
         textArea: '',
         topic: ""
      }
    }
    userChangeHandler = event =>{this.setState({userName: event.target.value})}
    textChangeHandler = event =>{this.setState({textArea: event.target.value})}
    topicChangeHandler = event => {this.setState({topic: event.target.value})}
    
    handleSubmit = event => {
        alert(`${this.state.userName} ${this.state.textArea} ${this.state.topic}`) 
        event.preventDefault()
}
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <div>
                <label>UserName:</label>
                <input type='text' value={this.state.userName} onChange={this.userChangeHandler} />
            </div><br />

            <div>
                <label>TextArea:</label>
                <textarea value={this.state.textArea} onChange={this.textChangeHandler} />
            </div><br />

            <div>
                <label>topic:</label>
                <select value={this.state.topic} onChange={this.topicChangeHandler}>
                    <option value="React">React</option>
                    <option value="VUE">VUE</option>
                    <option value="Angular">Angular</option>
                </select>
            </div><br />

            <div>
                <button type='submit'>Submit</button>
            </div>

             </form>
    </div>
    )
  }
}

>>>>>>> ada6e9a0e7663a75060c94cf06a5b470ad4f30fa
export default FormValidation