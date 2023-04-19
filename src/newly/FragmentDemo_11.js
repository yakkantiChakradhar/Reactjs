/*
 REACT FRAGMENT
 ``````````````
               Fragments basically Groups list of elements without adding extra nodes to the DOM.

               It accepts key attributes
 */
import React from 'react'

function FragmentDemo() {
  return (
    <React.Fragment>
        <h1>Demo for fragments in REACT</h1>
        <p>Fragments basically Groups list of elements without adding extra nodes to the DOM</p>
    </React.Fragment>
  )
}

export default FragmentDemo