import React from 'react';
import Search from '../Components/Search.js';
import ItemContainer from '../Components/ItemContainer.js';

const Ingredients = () => {
    return (
        <div className='page col'>
            <Search type='ingredients'/>

            <ItemContainer/>
        </div>
    )
}

export default Ingredients;