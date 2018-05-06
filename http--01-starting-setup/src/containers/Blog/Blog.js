import React, { Component } from 'react';

import './Blog.css';

import axios from 'axios';
import Posts from '../Posts/Posts';
import {Route, Link, Switch} from 'react-router-dom';
import NewPost from '../NewPost/NewPost';
import FullPost from '../FullPost/FullPost';

class Blog extends Component {

    render () {
        return (
            <div className="Blog">
                <header>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/new-post">New Post</Link></li>
                    </ul>
                </header>
                <Switch>
                    <Route path='/new-post' component={NewPost} />
                    <Route path='/' component={Posts} />
                </Switch>
                
            </div>
        );
    }
}

export default Blog;