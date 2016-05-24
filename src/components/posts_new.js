import React, { Component } from 'react';
import { reduxForm } from 'redux-form'; //Almost identical to connect
import { Link } from 'react-router';

import { createPost } from '../actions/index';

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

        //handleSubmit is called when the form is posted with the contents of the form. handleSubmit will call our
        //action creator with the contents of our form.

        //redux provides us a helper called touched. It's false until
        //the user somehow interacts with the field. Then it doesn't show the error by default.
        return(
            <form onSubmit={handleSubmit(this.props.createPost)}>
                <h3>Create a new post</h3>
                <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
                    <label>Title</label>
                    <input type="text" className="form-control"  {...title}/>
                    <div className="text-help">
                        {title.touched ? title.error : ""}
                    </div>
                </div>
                <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
                    <label>Categories</label>
                    <input type="text" className="form-control" {...categories}/>
                    <div className="text-help">
                        {categories.touched ? categories.error : ""}
                    </div>
                </div>
                <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
                    <label>Content</label>
                    <textarea className="form-control" {...content}/>
                    <div className="text-help">
                        {content.touched ? content.error : ""}
                    </div>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>

            </form>
        );
    }
}

function validate(values) {
    const errors = {};

    if(!values.title) {
        errors.title = 'Enter a username';
    }
    if(!values.categories) {
        errors.categories = 'Enter categories';
    }
    if(!values.content) {
        errors.content = 'Enter content';
    }

    return errors; //If the object we return has a key that matches our field names and it has a value tied to it, then
    //Redux-form assumes that the form is not valid. Does not allow to submit, adds a couple of properties to the field
    //configuration object up top - {title}.
}

//Whenever we change these input fields, it's setting a new value on our global application state.
//State will look something like
//form: [
//  PostsNewForm: {
//      title: '...',
//      categories: '...'

//connect(): first argument is mapStateToProps, 2nd is mapDispatchToProps
//reduxForm(): 1st is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps
export default reduxForm({
    form: 'CreateNewPost',
    fields: ['title', 'categories', 'content'],
    validate //validate being the function we declared.
}, null, { createPost })(PostsNew); //Connect the mapDispatchToProps with handleSubmit