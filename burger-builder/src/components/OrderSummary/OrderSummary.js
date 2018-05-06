
import React from 'react';
import Aux from '../../hoc/Aux';
import Button  from '../UI/Button/Button';

const orderSumary =(props) => {

    const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey => {
        return (
                <li key={igKey}> 
                    <span style ={{textTransform : 'capitalize'}}/> {igKey} : {props.ingredients[igKey]} 
               </li>);
    });

    return (
        <Aux>
            <h3>Your Order</h3>
            <p> A Delicious Burger with following items</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price : {props.totalPrice.toFixed(2)}</strong></p>
            <p>Continue to checkout? </p>
            <Button btnType="Danger" clicked={props.cancel}>CANCEL</Button>
            <Button btnType="Success" clicked={props.continue}>CONTINUE</Button>

        </Aux>
    );
};

export default orderSumary;