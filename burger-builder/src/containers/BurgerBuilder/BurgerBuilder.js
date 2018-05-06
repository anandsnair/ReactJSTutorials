
import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/BuildControls/BuildControls';
import Modal from '../../components/UI/Model/Modal';
import OrderSummary from '../../components/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

const INGREDIENT_PRICE = {
    bacon : .6,
    meat : 1.3,
    cheese : .5,
    salad : .5
}
class BurgerBuilder extends Component {

    state = {
        ingredients : null,
        totalPrice : 4,
        purchasable : false,
        purchasing : false,
        loading : false,
        error : false
    }

    componentDidMount() {
        axios.get('ingredients.json').then(response => {
            this.setState({ingredients: response.data})
            console.log("Fetched ingredients");
        }).catch(
            this.setState({error:true})
        );
    }
    

    updatePurchaseState = (ing) => {
        const sum = Object.keys(ing)
        .map(igKey => {
            return ing[igKey];
        })
        .reduce((sum, ele) => {
            return sum + ele;
        },0);

        if(sum > 0) {
            this.setState
            ({purchasable: true})
        } else {
            this.setState
            ({purchasable: false})
        }
    }

    addIngredientHandler = (type) => {
        const updatedCount = this.state.ingredients[type] +1;
        const updatedIngerdients = {
            ...this.state.ingredients
        };
        updatedIngerdients[type] = updatedCount;
        const updatedPrice = this.state.totalPrice + INGREDIENT_PRICE[type];
        this.setState(
            {ingredients:updatedIngerdients,
            totalPrice: updatedPrice}
        )
        this.updatePurchaseState(updatedIngerdients);
    }

    removeIngredientHandler = (type) => {
        
        const updatedCount = this.state.ingredients[type] - 1;
        const updatedIngerdients = {
            ...this.state.ingredients
        };
        updatedIngerdients[type] = updatedCount;
        const updatedPrice = this.state.totalPrice - INGREDIENT_PRICE[type];
        if(updatedCount >= 0) {
            this.setState(
                {ingredients:updatedIngerdients,
                totalPrice: updatedPrice}
            )
        }
        this.updatePurchaseState(updatedIngerdients);
    }

    purchaseHandler=() => {
        this.setState({purchasing:true});
    }

    cancelPurchaseHandler=() => {
        this.setState({purchasing:false});
    }

    continuePurchaseHandler = () => {
        this.setState({loading:true});
        const order = {
            ingredients : this.state.ingredients,
            price : this.state.totalPrice,
            customer : {
                name : 'Anand',
                address : {
                    street : 'some street',
                    zipCode : '33332',
                    country : 'USA'
                },
                email : 'test@test.com'
            },
            deliveryMethod : 'fastest'
        }
        axios.post('/orders.json', order)
        .then(response => {
            this.setState({loading:false,
                purchasing:false});
            console.log(response.data);
        })
        .catch(error => {
            this.setState({loading:false,
                purchasing:false});
            console.log(error);
        });
    }

    render() {

        const disabledInfo = {
            ...this.state.ingredients
        };
        for(let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        let orderSummary = null;

        let burger = this.state.error ? <p>Ingredients can't be loaded</p>: <Spinner />
        if(this.state.ingredients) {
            burger = (
                <Aux>
                    <div>
                        <Burger ingredients={this.state.ingredients}/>
                    </div>
                    <div>
                        <BuildControls 
                        ingredientAdded={this.addIngredientHandler}
                        ingredientRemoved={this.removeIngredientHandler}
                        disabled={disabledInfo}
                        price={this.state.totalPrice}
                        purchasable={this.state.purchasable}
                        ordered={this.purchaseHandler}/>
                    </div>
                </Aux>
            
            );
            orderSummary = <OrderSummary ingredients = {this.state.ingredients}
                        totalPrice={this.state.totalPrice}
                        cancel={this.cancelPurchaseHandler}
                        continue={this.continuePurchaseHandler}/>
    
        }

        if(this.state.loading) {
            orderSummary = <Spinner />
        }

        return (
            <Aux>
                <div>
                    <Modal show={this.state.purchasing} closeBackDrop={this.cancelPurchaseHandler}>
                       {orderSummary} 
                    </Modal>
                    {burger}
                </div>
                
            </Aux>
        )
    }
}

export default withErrorHandler(BurgerBuilder, axios);