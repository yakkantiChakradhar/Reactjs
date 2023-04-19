<<<<<<< HEAD
/* 
List Rendering: - 
When we built a web application a common scenario is to display list of items, if we have a clear Idea about the JavaScript we are used to know about Map method while we using lists or Arrays.

Map method create a new array with the result of calling a provided function on every element in an array


Map method example: -
var array1 = [2,5,6,8];

const  map1 = array1.map( (x) => x*2 )

*/
import React from 'react'

function ListRendering() {
    const names=['chakri','kadiri','Gosala'];

const nam = names.map((name)=><h6>{name}</h6>);
  return (
    <div>{/*
    1> General model of list rendering
         <h2>{names[0]}</h2>
         <h2>{names[2]}</h2>
         <h2>{names[1]}</h2> */}
         {
            
            /*
            2> mapping inside the return method

            names.map((name)=><h1>{name}</h1>) */

         }
         { 
         /* 3> mapping inside the function and redering in the return method*/
         nam}
         
         </div>
  )
}

=======
/* 
List Rendering: - 
When we built a web application a common scenario is to display list of items, if we have a clear Idea about the JavaScript we are used to know about Map method while we using lists or Arrays.

Map method create a new array with the result of calling a provided function on every element in an array


Map method example: -
var array1 = [2,5,6,8];

const  map1 = array1.map( (x) => x*2 )

*/
import React from 'react'

function ListRendering() {
    const names=['chakri','kadiri','Gosala'];

const nam = names.map((name)=><h6>{name}</h6>);
  return (
    <div>{/*
    1> General model of list rendering
         <h2>{names[0]}</h2>
         <h2>{names[2]}</h2>
         <h2>{names[1]}</h2> */}
         {
            
            /*
            2> mapping inside the return method

            names.map((name)=><h1>{name}</h1>) */

         }
         { 
         /* 3> mapping inside the function and redering in the return method*/
         nam}
         
         </div>
  )
}

>>>>>>> ada6e9a0e7663a75060c94cf06a5b470ad4f30fa
export default ListRendering