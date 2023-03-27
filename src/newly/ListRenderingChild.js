import React from 'react'

function ListRenderingChild({person}) {
  return (
    <div><h2>Hi I'm {person.name} I'm {person.age} having skilled in {person.skill}</h2></div>
  )
}

export default ListRenderingChild