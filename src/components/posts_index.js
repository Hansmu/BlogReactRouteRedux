import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';

import { fetchPosts } from '../actions/index';

class PostsIndex extends Component {

    componentWillMount() {
        this.props.fetchPosts();
    }

    renderPosts() {
        console.log(this.props.posts);
        return this.props.posts.map((post) => {
           return(
               <li className="list-group-item" key={post.id}>
                   <span className="pull-xs-right">{post.categories}</span>
                   <strong>{post.title}</strong>
               </li>
           );
        });
    }

    render() {
        return(
            <div>
                <div className="text-xs-right">
                    <Link to="/posts/new" className="btn btn-primary">
                        Add a post
                    </Link>
                </div>
                <h3>Posts</h3>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
      posts: state.posts.allPosts
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchPosts }, dispatch);
}
//Could delete mapDispatchToProps and put in here just { fetchPosts }
export default connect(mapStateToProps, mapDispatchToProps)(PostsIndex);