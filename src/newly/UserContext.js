/* 
Context: -

Context provides a way to pass data through the component tree without having to pass props down manually at every level.

There are 3 steps
1> create the context
2> provide a context value
3> consume the context value in the necessary component
*/
import React from "react"

const UserContext = React.createContext("hello")

const UserProvider = UserContext.Provider

const UserConsumer = UserContext.Consumer

export { UserProvider, UserConsumer, UserContext }


