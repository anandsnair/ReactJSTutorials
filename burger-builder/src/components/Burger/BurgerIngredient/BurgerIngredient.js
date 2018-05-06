
import React, {Component} from 'react'
import cssClasses from './BurgerIngredient.css'
import PropTypes from 'prop-types'


class BurgerIngredient extends Component {

    render() {
        let ingredients = null;

        switch(this.props.type) {
            case ('bread-bottom') :
                ingredients = (
                    <div className={cssClasses.BreadBottom}>
                    </div>
                );
                break;
            case ('bread-top') :
                ingredients = (
                    <div className={cssClasses.BreadTop}>
                        <div className={cssClasses.Seeds1}></div>
                        <div className={cssClasses.Seeds2}></div>
                    </div>
                );
                break;
            case ('meat') : 
                ingredients = (
                    <div className= {cssClasses.Meat}> 
                    </div>
                );
                break;
            case ('cheese') : 
                ingredients = (
                    <div className= {cssClasses.Cheese}> 
                    </div>
                );
                break;
            case ('salad') : 
                ingredients = (
                    <div className= {cssClasses.Salad}> 
                    </div>
                );
                break;
            case ('bacon') : 
                ingredients = (
                    <div className= {cssClasses.Bacon}> 
                    </div>
                );
                break;
            default:
                ingredients = null;
        }
        return ingredients;
    }

}

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
};

export default BurgerIngredient;