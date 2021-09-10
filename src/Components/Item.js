import React, { useContext } from 'react';
import { Context } from '../Context.js';
import spoonacularLogo from '../Res/spoonacular-logo.svg';
import { Link } from 'react-router-dom';

const Item = ({ title, image, servings = false, readyInMin = false, spoonacularScore = false, price, unit = false, extendedIngredients = false}) => {
    const { setInfoData } = useContext(Context);

    const viewMoreOnClick = () => {
        setInfoData(
            {
                title,
                image,
                servings,
                readyInMin,
                spoonacularScore,
                price,
                unit,
                extendedIngredients
            }
        );
    }

    return (
        <div className={image ? 'item col' : 'item item-no-zoom col'} style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${image ? image : spoonacularLogo})`}}>      
            <h1>{title}</h1>
                    
            <h2>{servings ? `${servings} Servings` : 'Servings: N/A'}</h2>

            <h2>{readyInMin ? `Ready in ${readyInMin} mins` : 'Ready in mins: N/A'}</h2>

            <h2>{spoonacularScore ? `Scores ${spoonacularScore}/100` : 'Spoonacular Score: N/A'}</h2>

            <h2>{unit ? `$${price ? price : '???'} ${unit}` : `$${price ? price : '???'} USD`} </h2>

            <Link to={`/Info/${title}`} exact='true' className='link center' onClick={viewMoreOnClick}>View More</Link>
        </div>
    )
}

export default Item;