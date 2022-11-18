import React from 'react'
import Task from './Task'

function TaskList( {data} ) {

    let pass = [];

    for(let i = 0; i < data.length; i++){
        pass.push(<Task data = {data[i]} />);
    }

  return (
    <>
        {pass} 
    </>
    //Warning: Each child in a list should have a unique "key" prop.
  )
}

export default TaskList;