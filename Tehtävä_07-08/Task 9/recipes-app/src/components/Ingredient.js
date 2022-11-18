import React from 'react';

export default function({ amount, measurement, name }){
    return (
        <li>
            {amount} {measurement} {name}
        </li>
    );
}