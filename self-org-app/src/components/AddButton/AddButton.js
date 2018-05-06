import React, {Component} from 'react';
import Aux from '../../hoc/Aux/Aux';
import cssClasses from './AddButton.css';

class AddButton extends Component {
    
    state = {
        addedText : ""
    }
    render() {
        return (
            <Aux>
                <a/>
                <input className={cssClasses.inputArea} 
                type="text" 
                onKeyPress={this.onKeyPress} 
                onChange={this.onChange}
                value={this.state.addedText}/>
            </Aux>
        )
    }

    onKeyPress =(e) => {
        if (e.key == 'Enter') {
            this.props.addText(this.state.addedText);
            this.setState({addedText:""});
          }  
    }

    onChange = (e) => {
        this.setState({addedText: e.target.value});
    }

    
} 


export default AddButton