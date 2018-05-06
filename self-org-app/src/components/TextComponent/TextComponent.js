import React from 'react';
import Aux from '../../hoc/Aux/Aux';
const textComponent =(props) => {
    return(
        <Aux>
            <input type="text" maxlength="255" placeholder="Add a todo.."/>
        </Aux>
    );
}

export default textComponent;