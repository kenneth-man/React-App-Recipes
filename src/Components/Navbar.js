import React, { useContext } from 'react';
import { Context } from '../Context.js';
import { Link, NavLink } from 'react-router-dom';
import spoonacularLogo from '../Res/spoonacular-logo.svg';
import homeIcon from '../Res/home.svg';
import recipesIcon from '../Res/spoon.svg';
import randomRecipesIcon from '../Res/flask.svg';
import ingredientsIcon from '../Res/leaf.svg';
import groceriesIcon from '../Res/cart-plus.svg';
import menusIcon from '../Res/cutlery.svg';

const Navbar = () => {
    const { setSearchType } = useContext(Context);

    const toRandomOnClick = () => {
        setSearchType('');
    }

    return (
        <div className='navbar row'>
            <Link to='/' exact='true' className='link link-alt center'>
                <img src={spoonacularLogo} alt='spoonacular-logo' style={{height: '80px'}}/>
            </Link>

            <div className='row' style={{width: '60%', justifyContent: 'space-between'}}>
                <NavLink to='/' exact={true} className='navlink navlink-alt row'>
                    <img src={homeIcon} alt='home-icon' className='mr'/>

                    Home
                </NavLink>

                <NavLink to='/Recipes' exact={true} className='navlink navlink-alt row'>
                    <img src={recipesIcon} alt='recipes-icon' className='mr'/>

                    Recipes
                </NavLink>

                <NavLink to='/RandomRecipes' exact={true} className='navlink navlink-alt row' onClick={toRandomOnClick}>
                    <img src={randomRecipesIcon} alt='random-recipes-icon' className='mr'/>

                    Random
                </NavLink>

                <NavLink to='/Ingredients' exact={true} className='navlink navlink-alt row'>
                    <img src={ingredientsIcon} alt='ingredients-icon' className='mr'/>

                    Ingredients
                </NavLink>

                <NavLink to='/Groceries' exact={true} className='navlink navlink-alt row'>
                    <img src={groceriesIcon} alt='groceries-icon' className='mr'/>

                    Groceries
                </NavLink>

                <NavLink to='/Menus' exact={true} className='navlink navlink-alt row'>
                    <img src={menusIcon} alt='menus-icon' className='mr'/>

                    Menus
                </NavLink>
            </div>

        </div>
    )
}

export default Navbar;