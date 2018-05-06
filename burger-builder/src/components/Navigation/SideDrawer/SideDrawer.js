import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import cssClasses from './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux';
const sideDrawer = (props) => {
    let attachClasses = [cssClasses.SideDrawer, cssClasses.Close]
    if(props.open) {
        attachClasses = [cssClasses.SideDrawer, cssClasses.Open]
    }
    return (
        <Aux>
            <Backdrop show={props.open} closeBackDrop={props.closed}/>
            <div className={attachClasses.join(' ')}>
                <div className={cssClasses.Logo }>
                    <Logo/>
                </div>
                <nav>
                    <NavigationItems/>
                </nav>

            </div>
        </Aux>
    );
}
 
export default sideDrawer;