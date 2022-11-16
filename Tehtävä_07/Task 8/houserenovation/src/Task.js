import React from 'react';

const Task = (props) => {

    const {name, tools, steps} = props;

    return (
        <>
            <TaskName name = {name} />
            <TaskTools tools = {tools} />
            <TaskSteps steps = {steps} />
        </>
    )
};

const TaskName = ({name}) => {
    return (
        <div>{name}</div>
    )
};

const TaskTools = ({tools}) => {
    return (
        <div>{tools}</div>
    )
};

const TaskSteps = ({steps}) => {
    return (
        <div>{steps}</div>
    )
};

export default Task;