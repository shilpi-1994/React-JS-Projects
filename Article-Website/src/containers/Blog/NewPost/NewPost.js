import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import './NewPost.css';

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: 'Shilpi',
        submitted: false
    }

    postDataHandler = () => {
        const postData = {
            title: this.state.title,
            body: this.state.content,
            author: this.state.author
        }
        axios.post('/posts/', postData)
            .then(response => {
                console.log(response);
                this.props.history.replace('/posts');
                // this.setState({submitted: true});
            });
    }

    render () {
        let redirected = null;
        if(this.state.submitted) {
            redirected = <Redirect to="/posts" />
        }
        return (
            <div className="NewPost">
                {redirected}
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}>
                    <option value="Shilpi">Shilpi</option>
                    <option value="Bhavya">Bhavya</option>
                </select>
                <button onClick={this.postDataHandler}>Add Post</button>
            </div>
        );
    }
}

export default NewPost;