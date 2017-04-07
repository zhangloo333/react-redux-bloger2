import React, {Component} from 'react';
import {reduxForm} from 'redux-form';

class PostsNew extends Component {
  render() {
    return (
      // <div> Create Form </div>  build a form
      <form>
        <h3>Create A New Post</h3>

        <div className = "form-group">
          <label>Title</label>
          <input type="text" className="form-control" />
        </div>

        <div className = "form-group">
          <label>categories</label>
          <input type="text" className="form-control" />
        </div>

        <div className = "form-group">
          <label>Content</label>
          <input type="text" className="form-control" />
        </div>

        <button type ="submit" className="btn btn-primary">Submit</button>
      </form>
    )
  }
}

export default reduxForm({
    form: 'PostsNewForm',
    fields:['title','categories','content']
})(PostsNew);

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
