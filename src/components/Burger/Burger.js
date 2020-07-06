import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'


const Burger = (props) => {
    let transformedIngredients= Object.keys(props.ingredients).map(igKey => {
        // console.log("xxxxxxxxxx: ", [...Array(props.ingredients[igKey])], [Array(props.ingredients[igKey])].length);
        // console.log("ccccccccc",igKey)
        return [...Array(props.ingredients[igKey])].map((_, i) => {
            // console.log("sssssssssss",props.ingredients[igKey])
            return <BurgerIngredient key={igKey +i} type={igKey}/>
        });
    })
    .reduce((arr, el) => {
        return arr.concat(el);
    },[])
    // console.log('dsdsdsd',transformedIngredients.length);
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>please start adding ingredients!</p>
    }

    // console.log(transformedIngredients)
            
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type= 'bread-top'/>
            {transformedIngredients} 
            
            <BurgerIngredient type= 'bread-bottom'/>
        </div>
    );
};

export default Burger;

// [salad, ]S