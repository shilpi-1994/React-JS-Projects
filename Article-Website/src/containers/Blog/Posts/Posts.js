import React , { Component } from 'react';
import axios from '../../../axios';
import './Posts.css';
import Post from '../../../components/Post/Post';
import { Link } from 'react-router-dom';

class Posts extends Component {
    state = {
        posts : [],
        selectedPostId: null
    }

    componentDidMount() {
        axios.get('/posts')
            .then(response => {
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                        return {
                            ...post,
                            author: 'Shilpi'
                        }
                });
                this.setState({posts: updatedPosts});
            })
            .catch(error => {
                console.log(error);
            });
    }

    postSelectedHandler = (id) => {
        this.setState({selectedPostId: id})
    }

    render() {
        let posts = <p style={{textAlign: "center"}}>Something went wrong with the network, Please try again!!!</p>
        if(!this.state.error){
            posts = this.state.posts.map(post => {
                return (
                <Link to={'/' + post.id} key={post.id}>
                    <Post 
                    title={post.title}
                    author={post.author}
                    clicked={() => this.postSelectedHandler(post.id)}/>
                </Link> );
            });
        }
        return (
            <section className="Posts">
                {posts}
            </section>
        );
    }
}

export default Posts;