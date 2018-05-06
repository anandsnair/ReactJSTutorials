import React, {Component} from 'react';
import Aux from '../../hoc/Aux/Aux';
import TreeComponent from '../../components/TreeComponent/TreeComponent';
import EditableTreeComponent from '../../components/TreeComponent/EditableTreeComponent';
import AddButton from '../../components/AddButton/AddButton';
import Project from '../Project/Project';
import cssClasses from './Layout.css';

class Layout extends Component {

    render() {
        return (
            <div className={cssClasses.layout}>
                <p>Toolbar</p>
                <Project/>
            </div>
        )
    }

}

export default Layout;