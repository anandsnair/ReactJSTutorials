
import React from 'react';
import cssClasses from './NavigationItem.css'

const navigationItem = (props) => (
    <li className={cssClasses.NavigationItem}>
        <a 
        href={props.links} 
        className={props.active ? cssClasses.active : null}>{props.children}</a>
    </li>
);

export default navigationItem;