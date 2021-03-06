
import React from 'react';
import cssClasses from './Toolbar.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = (props) => {
    return (
        <header className={cssClasses.Toolbar}>
            <DrawerToggle clicked={props.toggle}/>
            <Logo/>
            <nav className={cssClasses.DesktopOnly}>
                <NavigationItems/>
            </nav>
        </header>
    );
   
}

export default toolbar;

