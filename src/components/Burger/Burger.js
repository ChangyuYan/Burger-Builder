import React from 'react';
import classes from './Burger.css';
import BugerIngradient from '../Burger/BurgerIngredient/BurgerIngredient';

const burger = (props) => {
	return (
		<div className={classes.Burger}>
			<BugerIngradient type="bread-top"/>
			<BugerIngradient type="cheese"/>
			<BugerIngradient type="meat"/>
			<BugerIngradient type="bread-bottom"/>
		</div>
	);
};

export default burger;
