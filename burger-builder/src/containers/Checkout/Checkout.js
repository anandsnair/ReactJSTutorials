import React, {Component} from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

class Checkout extends Component {
    state ={
        ingredients: {
            cheese:1,
            bacon:2
        }
    }

    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);
        console.log(this.props.location.search);

        const ingredients = {};
        for(let param of query.entries()) {
            //['salad', '1']
            console.log(param[0] + " "+ param[1]);
            ingredients[param[0]] = +param[1];
        }
        this.setState({ingredients:ingredients});
    }

    cancelHandler = () => {
        this.props.history.goBack();
    }

    continueHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    render() {
        return (
            <CheckoutSummary 
            ingredients={this.state.ingredients}
            cancel={this.cancelHandler}
            continue={this.continueHandler}/>
        );
    }
}

export default Checkout;