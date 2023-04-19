<<<<<<< HEAD
import React from 'react'
import ListRenderingChild from './ListRenderingChild';

function ListRender() {
    const persons = [{id:1,name:"charan",age:23,skill:"React"},
                     {id:2,name:"mahathma",age:25,skill:"VUE"},
                     {id:3,name:"simran",age:24,skill:"Angular"},
                     {id:4,name:"king",age:21,skill:"Text"}];
    const personList = persons.map((person)=><ListRenderingChild key={person.id} person={person} />)              
  return (
    <div>{personList}</div>
  )
}

export default ListRender

/* 
Lists and keys summary: -
1> A "key" is a special string attribute you need to include when creating lists of elements.

2> Keys give the elements a stable identity.

3> keys help REACT identity which items have changed, are added, or are removed.

4> Help in efficient update of the user interface.

=======
import React from 'react'
import ListRenderingChild from './ListRenderingChild';

function ListRender() {
    const persons = [{id:1,name:"charan",age:23,skill:"React"},
                     {id:2,name:"mahathma",age:25,skill:"VUE"},
                     {id:3,name:"simran",age:24,skill:"Angular"},
                     {id:4,name:"king",age:21,skill:"Text"}];
    const personList = persons.map((person)=><ListRenderingChild key={person.id} person={person} />)              
  return (
    <div>{personList}</div>
  )
}

export default ListRender

/* 
Lists and keys summary: -
1> A "key" is a special string attribute you need to include when creating lists of elements.

2> Keys give the elements a stable identity.

3> keys help REACT identity which items have changed, are added, or are removed.

4> Help in efficient update of the user interface.

>>>>>>> ada6e9a0e7663a75060c94cf06a5b470ad4f30fa
*/