import React, { useContext } from 'react';
import { Context } from '../Context.js';
import Item from './Item.js';

const ItemContainer = () => {
    const { searchType, itemContainerData } = useContext(Context);

    return (
        <div className='itemContainer row'>
            {
                (searchType === 'recipes' || searchType === '') && itemContainerData.length > 0 ?
                itemContainerData.map((curr, index) => 
                    <Item
                        key={index}
                        title={curr.title}
                        image={curr.image}
                        servings={curr.servings}
                        readyInMin={curr.readyInMinutes}
                        spoonacularScore={curr.spoonacularScore}
                        price={curr.pricePerServing}
                        extendedIngredients={curr.extendedIngredients}
                    />
                ) : (
                    searchType === 'ingredients' && itemContainerData.length > 0 ?
                    itemContainerData.map((curr, index) =>
                        <Item
                            key={index}
                            title={curr.name}
                            image={`https://spoonacular.com/cdn/ingredients_500x500/${curr.image}`}
                            price={curr.estimatedCost.value}
                            unit={curr.estimatedCost.unit}
                        />
                    ) : (
                        (searchType === 'products' || searchType === 'menuItems') && itemContainerData.length > 0 ?
                        itemContainerData.map((curr, index) =>
                            <Item
                                key={index}   
                                title={curr.title}
                                image={searchType === 'products' ? 
                                    `https://spoonacular.com/productImages/${curr.id}-636x393.${curr.imageType}` : 
                                    `https://images.spoonacular.com/file/wximages/${curr.id}-636x393.${curr.imageType}`}
                                servings={curr.servings.number}
                                spoonacularScore={curr.spoonacularScore}
                                price={curr.price}
                            />
                        ) : 
                        <h1>No Items Found...</h1>   
                    )  
                )  
            }
        </div>
    )
}

export default ItemContainer;