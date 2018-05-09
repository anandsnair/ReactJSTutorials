import React from 'react';
import cssClasses from './CheckoutSummary.css';
import Button from '../../UI/Button/Button';
import Burger from '../../Burger/Burger';

const checkoutSummary = (props) => {
    return (
        <div className={cssClasses.container}>
            <h1> We hope it tastes well</h1>
            <div>
                <Burger ingredients={props.ingredients}/>
            </div>
            <Button btnType="Danger" clicked={props.cancel}>CANCEL</Button>
            <Button btnType="Success" clicked={props.continue}>CONTINUE</Button>
        </div>

    );
}

export default checkoutSummary;