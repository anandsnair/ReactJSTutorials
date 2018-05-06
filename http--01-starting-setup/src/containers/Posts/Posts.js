import React, { Component } from 'react';
import axios from '../../axios-orders';
import Post from '../../components/Post/Post';
import {Link} from 'react-router-dom';
import {Route} from 'react-router-dom';
import FullPost from '../FullPost/FullPost';

class Posts extends Component {
    
    state = {
        posts : [],
        selectPostId : null
    };

    componentDidMount() {
        console.log(this.props);
        axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
            const posts = response.data.slice(0,4);
            const updatedPosts = posts.map(post => {
                return {
                    ...post,
                    author: "Anand"
                }
            });
            this.setState({posts:updatedPosts});
        });
    }
    

    postSelectedHandler=(id) => {
        //this.setState({selectPostId:id})
        this.props.history.push({pathname : '/'+id});
    }


    render() {
        console.log("rendering")
        const posts = this.state.posts.map(post => {
            return (
                    //<Link key={post.id}  to={'/'+post.id}>
                    <Post 
                    key={post.id}
                    title={post.title} 
                    author={post.author}
                    clicked={() => this.postSelectedHandler(post.id)}/>
                    //</Link>
                    );
        });
        return (
        <div>
            <section className="Posts">
                {posts}  
            </section>
            <Route path='/:id' exact component={FullPost} />
        </div>
        

        );
    }
}

export default Posts;