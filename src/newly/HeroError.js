import React from 'react'

function HeroError({heroName}) {
    if(heroName === 'joker'){
        throw new Error("Not a Hero");
    }
  return (
    <div>{heroName}</div>
  )
}

export default HeroError