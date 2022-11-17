import React from 'react';

const Task = ( {data} ) => {

    return (
        <>
            {
                data.map( (item, i) =>
                    <div>
                        <h2>{item.name}</h2>
                        <h3>Tools:</h3>
                        {
                            React.createElement(
                                "ul",
                                null,
                                item.tools.map((item, i) =>
                                    React.createElement("li", { key: i }, item))
                            )
                        }
                        <h3>Steps:</h3>
                        {
                            React.createElement(
                                "ul",
                                null,
                                item.steps.map((item, i) =>
                                    React.createElement("li", { key: i }, item))
                            )
                        }
                    </div>
                )
            }
        </>
    )
};

export default Task;