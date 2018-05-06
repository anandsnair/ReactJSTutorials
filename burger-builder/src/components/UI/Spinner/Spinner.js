
import React from 'react';
import cssClasses from './Spinner.css';

const spinner = (props) => (
        <div className={cssClasses.Loader}>
            <div className={cssClasses.b1}></div>
            <div className={cssClasses.b2}></div>
        </div>
);

export default spinner;