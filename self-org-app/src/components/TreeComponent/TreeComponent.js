
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Treebeard} from 'react-treebeard';
import cssClasses from './TreeComponent.css';
import Aux from '../../hoc/Aux/Aux';

const data = {
    obj : { id : "test", name : "test123"},
    name: 'Project Name',
    toggled: true,
    children: [
        {
            name: 'parent',
            children: [
                { name: 'child1' },
                { name: 'child2' }
            ]
        },
        {
            name: 'loading parent',
            loading: true,
            children: []
        },
        {
            name: 'parent',
            children: [
                {
                    name: 'nested parent',
                    children: [
                        { name: 'nested child 1' },
                        { name: 'nested child 2' }
                    ]
                }
            ]
        }
    ]
};

class TreeComponent extends Component {

    state = {};

    onToggle=(node, toggled) => {
        if(this.state.cursor){this.state.cursor.active = false;}
        node.active = true;
        if(node.children){ node.toggled = toggled; }
        this.setState({ cursor: node });
    }

    onClick=(node, toggled) =>  {
        console.log("Clicked");
    }

    render(){
        return (
            <Aux className={cssClasses.Tree}>
                <div className={cssClasses.Tree}>
                <Treebeard
                    data={data}
                    onToggle={this.onToggle}
                    onClick={this.onClick}
                />
                </div>
                
            </Aux>
        );
    }
}

export default TreeComponent;

