import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem'

const NavigationItems = () => {
    return (
        <div>
            <ul className={classes.NavigationItems}>
                <NavigationItem link='/' exact >Burger Builder</NavigationItem>
                <NavigationItem link='/orders'>Orders</NavigationItem>
                <NavigationItem link='/auth'>Authenticate</NavigationItem>
            </ul>
        </div>
    );
};

export default NavigationItems;