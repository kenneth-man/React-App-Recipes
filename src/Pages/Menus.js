import React from 'react';
import Search from '../Components/Search.js';
import ItemContainer from '../Components/ItemContainer.js';

const Menus = () => {
    return (
        <div className='page col'>
            <Search type='menuItems'/>
            
            <ItemContainer/>
        </div>
    )
}

export default Menus;