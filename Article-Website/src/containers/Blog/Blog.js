import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import Posts from './Posts/Posts';
import './Blog.css';
import aysncComponent from '../../hoc/asyncComponent';

const AsynchNewPost = aysncComponent(() => {
    return import('./NewPost/NewPost');
});

class Blog extends Component {
    state = {
        auth: true
    }
    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/posts/" 
                                exact
                                activeClassName="my-active"
                                activeStyle={{
                                    color: 'fa923f',
                                    textDecoration: 'underline'
                                }}
                                >Home</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    {this.state.auth ? <Route path="/new-post" component={AsynchNewPost}/> : null}
                    <Route path="/posts/" component={Posts}/>
                    <Route render={() => <h1>Page not found</h1>}/>
                    {/* <Redirect from="/" to="/posts"/> */}
                </Switch>
            </div>
        );
    }
}

export default Blog;