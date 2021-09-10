import React, { useContext } from 'react';
import { Context } from '../Context.js';
import spoonacularLogo from '../Res/spoonacular-logo.svg';
import InfoItem from '../Components/InfoItem.js'; 

const Info = () => {
    const { infoData } = useContext(Context);

    return (
        <div className='page center'>
            {
                infoData ?
                <div className='info col'>
                    <div className='row' style={{width: '100%', height: '100%'}}>
                        <img src={infoData.image ? infoData.image : spoonacularLogo} alt='infoData-img' style={{transform: 'scale(1.2)'}}/>

                        <div className='col' className='info__details col'>
                            <h1>{infoData.title}</h1>
                            <h2>{infoData.unit ? `$${infoData.price} ${infoData.unit}` : `$${infoData.price} USD`}</h2>
                            {infoData.servings ? <h2>{infoData.servings} Servings</h2> : <span></span>}
                            {infoData.readyInMin ? <h2>Ready in {infoData.readyInMin} minutes</h2> : <span></span>}
                            {infoData.spoonacularScore ? <h2>Spoonacular scores this {infoData.spoonacularScore}/100</h2> : <span></span>}
                            {infoData.extendedIngredients ? 
                                <div className='infoItem-cont row'>
                                    {infoData.extendedIngredients.map((curr, index) =>
                                        <InfoItem
                                            key={index}
                                            aisle={curr.aisle}
                                            image={`https://spoonacular.com/cdn/ingredients_500x500/${curr.image}`}
                                            name={curr.original}
                                        />
                                    )}
                                </div> : 
                                <span></span>
                            }
                        </div>
                    </div>
                </div> :
                <h1 style={{margin: 'auto'}}>No information found...</h1>
            }
        </div>
    )
}

export default Info;