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
