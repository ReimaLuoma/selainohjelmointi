import React from 'react';

const ThreatList = ({title, content}) => {

    return (
        <div>
            <h2>{title}</h2>
            <h2><ListObjects stuff={content}/></h2>
        </div>
    )
};

const ListObjects = ({stuff}) => {

    return (
        React.createElement(
            "ul",
            null,
            stuff.map((item, i) =>
                React.createElement("li", { key: i }, item))
        )
    )
};

export default ThreatList;