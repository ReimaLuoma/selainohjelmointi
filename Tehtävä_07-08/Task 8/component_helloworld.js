import React from 'react'

const Hello = ({msg}) => {
    return (
        <div>{msg}</div>
    )
}

const HelloList = () => {
    return (
        <>
            <Hello />
            <Hello />
            <Hello />
        </>
    )
}