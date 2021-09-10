import React, { useContext, useState } from 'react';
import { Context } from '../Context.js';

const Search = ({ type }) => {
    const { setSearchType, setSearchText, setSearchDiet } = useContext(Context);
    const [text, setText] = useState('');

    const setDietOnClick = (targetValue, targetId) => {
        const inputCheckElements = Array.from(document.querySelectorAll('.input-check'));
        const notCurrInputCheckElements = inputCheckElements.filter(curr => curr.id !== targetId);
        
        notCurrInputCheckElements.forEach(curr => curr.checked = false);

        inputCheckElements.every(curr => curr.checked === false) ? setSearchDiet('') : setSearchDiet(targetValue);
    }

    const searchButtonOnClick = () => {
        if(text){
            setSearchType(type);
            setSearchText(text);
        } else {
            alert('Missing search value...');
        }
    }

    return (
        <div className='search col'>
            <div className='row' style={{width: '35%'}}>
                <input placeholder={`search for ${type}...`} type='text' className='input-text' value={text} onChange={e => setText(e.target.value)}/>

                {/*using onClick search because api only allows 150 calls a day*/}
                <button onClick={searchButtonOnClick}>Search</button>
            </div>

            {
                type === 'recipes' ? 
                <div className='search__cont row'>
                    <div className='row'>
                        <label htmlFor='vegetarian'>Vegetarian</label>
                        <input name='vegetarian' type='checkbox' className='input-check' id='input-check--1' value='vegetarian' onClick={e => setDietOnClick(e.target.value, e.target.id)}/>
                    </div>

                    <div className='row'>
                        <label htmlFor='vegan'>Vegan</label>
                        <input name='vegan' type='checkbox' className='input-check' id='input-check--2' value='vegan' onClick={e => setDietOnClick(e.target.value, e.target.id)}/>
                    </div>

                    <div className='row'>
                        <label htmlFor='gluten-free'>Gluten Free</label>
                        <input name='gluten-free' type='checkbox' className='input-check' id='input-check--3' value='glutenFree' onClick={e => setDietOnClick(e.target.value, e.target.id)}/>
                    </div>

                    <div className='row'>
                        <label htmlFor='ketogenic'>Ketogenic</label>
                        <input name='ketogenic' type='checkbox' className='input-check' id='input-check--4' value='ketogenic' onClick={e => setDietOnClick(e.target.value, e.target.id)}/>
                    </div>

                    <div className='row'>
                        <label htmlFor='paleo'>Paleo</label>
                        <input name='paleo' type='checkbox' className='input-check'  id='input-check--5' value='paleo' onClick={e => setDietOnClick(e.target.value, e.target.id)}/>
                    </div>

                    <div className='row'>
                        <label htmlFor='primal'> Primal</label>
                        <input name='primal' type='checkbox' className='input-check' id='input-check--6' value='primal' onClick={e => setDietOnClick(e.target.value, e.target.id)}/>
                    </div>
                </div> :
                <span>&nbsp;</span>
            }
        </div>
    )
}

export default Search;