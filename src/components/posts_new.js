import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
// import action post from actions provider

import { createPost } from '../actions/index';

class PostsNew extends Component {

  render() {
    //刚才这一行有问题；
    const {fields:{title, categories,content}, handleSubmit} = this.props;
    //  const handleSubmit = this.props.handleSubmit; = const {handleSubmit} = this.props

    // const title = this.props.fields.title = const {fields:{title}}
    return (
      // <div> Create Form </div>  build a form
      <form onSubmit={handleSubmit(this.props.createPost)}>
        <h3>Create A New Post</h3>

        <div className = "form-group">
          <label>Title</label>
          <input type="text" className="form-control" placeholder = { title.touched ? title.error : ""} {...title}/>
          <div className="text-help">
            { title.touched ? title.error : ""}
          </div>
        </div>

        <div className = "form-group">
          <label>categories</label>
          <input type="text" className="form-control" {...categories}/>
        </div>

        <div className = "form-group">
          <label>Content</label>
          <input type="text" className="form-control" {...content}/>
        </div>

        <button type ="submit" className="btn btn-primary">Submit</button>
      </form>
    )
  }
}

// add valiad form
function validate(values) {
  const errors = {};
  if(!values.title) {
    errors.title = 'Enter a username';
  }
  return errors;
}




/* 87
connect: frist argument is mapStateToProps, 2nd is mapDispathToProps
reduxForm: 1ft is form congig, 2nd is mapStateToProps, 3rd is mapDispathToProps
*/



export default reduxForm({
    form: 'PostsNewForm',
    fields:['title','categories','content'],
    validate
},null,{createPost})(PostsNew);

// user types something in ...record it on application state
// redux form 主要是把 componenet level 变成 application level的
/*
state ==={
  form: {
    PostsNewForm: {
      title: '.....',
      categories: '.....',
      content: '.......'
    }
  }
}
*/
