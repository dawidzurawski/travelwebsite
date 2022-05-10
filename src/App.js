import React from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import data from "./data"

export default function App(){
  const mainElements = data.map(mainInfo => {
    return(
      <Main 
        key={mainInfo.id}
        mainInfo={mainInfo}
      />
    )
  })
  return(
    <div>
      <Navbar />
      {mainElements}
    </div>
  )
}