import React, {Component} from 'react'
import Aux from '../../hoc/Aux'
import cssClasses from './Layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer:false
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer:false});
    }
    
    sideDrawerOpenHandler = () => {
        this.setState({showSideDrawer:false});
    }

    toggleStateHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer : !prevState.showSideDrawer};    
        });
    }

    render() {
        return (
            <Aux>
                <Toolbar toggle={this.toggleStateHandler}/>
                <SideDrawer open={this.state.showSideDrawer}
                closed={this.sideDrawerClosedHandler}/>
                <main className={cssClasses.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }

}

export default Layout;