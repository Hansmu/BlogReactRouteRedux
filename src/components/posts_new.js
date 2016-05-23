import React, { Component } from 'react';
import { reduxForm } from 'redux-form'; //Almost identical to connect

class PostsNew extends Component {
    render() {
        /*
        const handleSubmit  = this.props.handleSubmit; //Helper method provided by redux-form
        const title = this.props.fields.title;
        const categories = this.props.fields.categories;
        const content = this.props.fields.content;
        */
        const { fields: { title, categories, content }, handleSubmit} = this.props;
        //...title destructures the object and passes all of the functions to the input instead of calling this.props.
        return(
            <form onSubmit={handleSubmit}>
                <h3>Create a new post</h3>
                <div className="form-group">
                    <label>Title</label>
                    <input type="text" className="form-control"  {...title}/>
                </div>
                <div className="form-group">
                    <label>Categories</label>
                    <input type="text" className="form-control" {...categories}/>
                </div>
                <div className="form-group">
                    <label>Content</label>
                    <textarea className="form-control" {...content}/>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
    }
}

//Whenever we change these input fields, it's setting a new value on our global application state.
//State will look something like
//form: [
//  PostsNewForm: {
//      title: '...',
//      categories: '...'
export default reduxForm({
    form: 'CreateNewPost',
    fields: ['title', 'categories', 'content']
})(PostsNew);