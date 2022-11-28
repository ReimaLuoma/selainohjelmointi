import React from 'react';

const Task = ( {data} ) => {

    return (
        <>
            <div>
                <h2>{data.name.toUpperCase()}</h2>

                <h3>{Object.keys(data)[1].toUpperCase()}</h3>
                
                {React.createElement(
                    "ul",
                    null,
                    data.tools.map((item, i) =>
                        React.createElement("li", {key: i}, item))
                )}

                <h3>{Object.keys(data)[2].toUpperCase()}</h3>

                {React.createElement(
                    "ul",
                    null,
                    data.steps.map((item, i) =>
                        React.createElement("li", {key: i}, item))
                )}
            </div>
        </>
    )
};

export default Task;