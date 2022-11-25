import React from 'react';
import Ingredient from './Ingredient';

const IngredientsList = ({ list }) => {
    return (
        <ul className='ingredients'>
            {list.map((ingredient, i) =>
                (<ingredient key={i} {...ingredient} />
            ))}
        </ul>
    )
}

export default IngredientsList;