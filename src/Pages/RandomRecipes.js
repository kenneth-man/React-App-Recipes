import React, { useContext, useEffect } from 'react';
import { Context } from '../Context.js';
import ItemContainer from '../Components/ItemContainer';

const RandomRecipes = () => {
    const { key, setItemContainerData } = useContext(Context);
    
    const fetchRandomIDs = async () => {
        try {
            const response = await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${key}`);
            const data = await response.json();
            setItemContainerData(data.recipes);
        } catch(error){
            console.log('error:', error);
        }
    }

    const randomizeBtnOnClick = () => fetchRandomIDs();

    useEffect(() => {
        randomizeBtnOnClick();
    },[])

    return (
        <div className='page col'>
            <div className='no-search col'>
                <h1>Fetch more randomly selected recipes below</h1>

                <button onClick={randomizeBtnOnClick}>Randomize</button>
            </div>

            <ItemContainer/>
        </div>
    )
}

export default RandomRecipes;