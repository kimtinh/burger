import React from 'react';
import burgerLogo from '../../assets/Images/original.png'
import classes from './Logo.module.css';

const Logo = (props) => {
    return (
        <div className={classes.Logo} style={{height: props.height}}>
            <img src={burgerLogo} alt='MyBurger'></img>
        </div>
    );
};

export default Logo;