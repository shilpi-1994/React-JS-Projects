import React , { Component } from 'react';
import axios from '../../../axios';
import './Posts.css';
import Post from '../../../components/Post/Post';

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
        this.props.history.push({pathname: '/' + id});
    }

    render() {
        let posts = <p style={{textAlign: "center"}}>Something went wrong with the network, Please try again!!!</p>
        if(!this.state.error){
            posts = this.state.posts.map(post => {
                return (
                    <Post
                    key={post.id}
                    title={post.title}
                    author={post.author}
                    clicked={() => this.postSelectedHandler(post.id)}/>);
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