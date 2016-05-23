import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchPosts } from '../actions/index';

class PostsIndex extends Component {

    componentWillMount() {
        this.props.fetchPosts();
    }

    render() {
        return(
            <di>
                List of blog posts
            </di>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchPosts }, dispatch);
}
//Could delete mapDispatchToProps and put in here just { fetchPosts }
export default connect(null, mapDispatchToProps)(PostsIndex);