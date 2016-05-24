import React from 'react';
import { Route, IndexRoute } from 'react-router';

import PostsNew from './components/posts_new';
import App from './components/app';
import PostsIndex from './components/posts_index';
import PostShow from './components/post_show';
//Keep the App as the parent container so it'd be easy to add footers and headers and the like.
//PostsIndex is nested in App, in order to render it, have to call out this.props.children in App.
export default (
    <Route path="/" component={App}>
        <IndexRoute component={PostsIndex} />
        <Route path="posts/new" component={PostsNew} />
        <Route path="posts/:id" component={PostShow} />
    </Route>
);
//this.props.params.id to access the value from the URL.