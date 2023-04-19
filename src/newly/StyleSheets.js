<<<<<<< HEAD
/* 
Style sheets in React: - 

to maintain stylesheets in react we have 4 ways
1> CSS stylesheet
2> inline stylesheet
3>  css module stylesheet
4> css as js library
*/

/*
 1> css stylesheet
 by creating css folder and importing it in to the component folder to which styling is happening 

*/

/* import React from 'react'
import './style.css'

function StyleSheets(props) {
    const className=props.primary ? "primary" : "" ;
  return (
    <div>
         <h1 className='primary'>StyleSheets</h1> 
        <h1 className={`${className} fontxl`}>StyleSheets</h1>
    </div>
  )
}



 */

// Inline styling: - its an approch by creating an object, object keys should be camel case it shouldn't use normal way of css keyss
import React from 'react'

const styleInline ={
    color: 'red',
    fontSize: '75px'
}

function StyleSheets() {
  return (
    <div style={styleInline}>StyleSheets</div>
  )
}


export default StyleSheets
/* 
css module can handle only in 'filename.module.css' 
normal css file can be accessable by the child components from parent components but, coming to  the module.css files can not be accessed by the child component bcoz child component cannot understand the things which are declared.
*/
=======
/* 
Style sheets in React: - 

to maintain stylesheets in react we have 4 ways
1> CSS stylesheet
2> inline stylesheet
3>  css module stylesheet
4> css as js library
*/

/*
 1> css stylesheet
 by creating css folder and importing it in to the component folder to which styling is happening 

*/

/* import React from 'react'
import './style.css'

function StyleSheets(props) {
    const className=props.primary ? "primary" : "" ;
  return (
    <div>
         <h1 className='primary'>StyleSheets</h1> 
        <h1 className={`${className} fontxl`}>StyleSheets</h1>
    </div>
  )
}



 */

// Inline styling: - its an approch by creating an object, object keys should be camel case it shouldn't use normal way of css keyss
import React from 'react'

const styleInline ={
    color: 'red',
    fontSize: '75px'
}

function StyleSheets() {
  return (
    <div style={styleInline}>StyleSheets</div>
  )
}


export default StyleSheets
/* 
css module can handle only in 'filename.module.css' 
normal css file can be accessable by the child components from parent components but, coming to  the module.css files can not be accessed by the child component bcoz child component cannot understand the things which are declared.
*/
>>>>>>> ada6e9a0e7663a75060c94cf06a5b470ad4f30fa
