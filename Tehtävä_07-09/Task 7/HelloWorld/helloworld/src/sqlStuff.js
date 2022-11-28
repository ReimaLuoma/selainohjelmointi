import React from 'react'
import {SqlElement, SqlElementArray} from './sqlElement'

export default function SqlStuff() {
  return (
    <>
        <div>
            <h2>SQL Injection</h2>
            <h2><SqlElement /></h2>
        </div>
        <div>
          <h2>SQL Injection using mapping</h2>
          <h2><SqlElementArray /></h2>
        </div>
    </>
  )
}