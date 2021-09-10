import React from 'react';
import Search from '../Components/Search.js';
import ItemContainer from '../Components/ItemContainer.js';

const Groceries = () => {
    return (
        <div className='page col'>
            <Search type='products'/>

            <ItemContainer/>
        </div>
    )
}

export default Groceries;