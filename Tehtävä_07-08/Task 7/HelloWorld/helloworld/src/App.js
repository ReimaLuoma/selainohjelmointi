import React from "react";
import ElementPart1 from "./elementPart1";
import Helloworld from "./helloworld";
import SqlStuff from "./sqlStuff";
import ThreatList from "./ThreatList";

function App() {

  let sqlsThreats = [
    "String injection",
    "Numeric injection",
    "Blind injection"
  ]

  return (
    <>
      <ElementPart1 />
      <Helloworld />
      <SqlStuff />
      <ThreatList title = "SQL injection" content = {sqlsThreats} />
    </>
  )
  
}

export default App;