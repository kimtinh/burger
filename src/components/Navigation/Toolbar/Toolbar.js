import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'

const Toolbar = (props) => {
    return (
        <div>
            <header className={classes.Toolbar}>
                <DrawerToggle clicked={props.drawerToggleClicked}/>
                <div className={classes.Logo}>
                    <Logo></Logo>
                </div>
                
                <nav className={classes.DesktopOnly}>
                    <NavigationItems></NavigationItems>
                </nav>
            </header>
        </div>
    );
};

export default Toolbar;