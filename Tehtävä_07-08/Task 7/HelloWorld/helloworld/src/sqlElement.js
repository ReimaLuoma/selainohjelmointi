import React from 'react'

export function SqlElement() {
  return (
    React.createElement(
        "ul",
        null,
        React.createElement("li", null, "String injection"),
        React.createElement("li", null, "Numeric injection"),
        React.createElement("li", null, "Blind injection")
    )
  )
}

let sqlsThreats = [
  "String injection",
  "Numeric injection",
  "Blind injection"
]

export function SqlElementArray(){
  return(
    React.createElement(
      "ul",
      null,
      sqlsThreats.map((item, i) =>
        React.createElement("li", { key: i }, item))
    )
  )
}
