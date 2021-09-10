import React from 'react';
import Search from '../Components/Search.js';
import ItemContainer from '../Components/ItemContainer.js';

const Recipes = () => {
    return (
        <div className='page col'>
            <Search type='recipes'/> 

            <ItemContainer/>
        </div>
    )
}

export default Recipes;