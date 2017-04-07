import React, {Component,PropTypes} from 'react';
import {reduxForm} from 'redux-form';
// import action post from actions provider

import { createPost } from '../actions/index';

//89 add link from react-router take the link back to
import {Link} from 'react-router';

class PostsNew extends Component {

  // context 90
  static contextTypes = {
    router: PropTypes.object
  }

  onSubmit(props) {
    this.props.createPost(props)
    .then(() => {
      // blog post has been created, navigate the user to the indexroute
      // we navigate by calling this.context.router.push with the new
      // path tp avigation to.
      this.context.router.push('/');
    });
  }

  render() {

    //刚才这一行有问题；
    const {fields:{title, categories,content}, handleSubmit} = this.props;
    //  const handleSubmit = this.props.handleSubmit; = const {handleSubmit} = this.props

    // const title = this.props.fields.title = const {fields:{title}}
    return (
      // <div> Create Form </div>  build a form
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h3>Create A New Post</h3>

        <div className = { `form-group ${title.touched && title.invalid? 'has-danger' : ''}`}>
          <label>Title</label>
          <input type="text" className="form-control" placeholder = { title.touched ? title.error : ""} {...title}/>
          <div className="text-help">
            { title.touched ? title.error : ""}
          </div>
        </div>

        <div className = { `form-group ${categories.touched && categories.invalid? 'has-danger' : ''}`}>
          <label>categories</label>
          <input type="text"
                 className="form-control"
                 {...categories}
                 placeholder = { categories.touched ? categories.error : ""}
          />
        </div>

        <div className = {`form-group ${content.touched && content.invalid? 'has-danger' : ''}`}>
          <label>Content</label>
          <textarea rows="10" type="text" className="form-control"
          placeholder = { content.touched ? content.error : ""}
          {...content}/>
        </div>

        <button type ="submit" className="btn btn-primary">Submit</button>
        <Link to ="/" className="btn btn-danger">Cancel</Link>
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

  if(!values.categories) {
    errors.categories = 'Enter a categories';
  }

  if(!values.content) {
    errors.content = 'Enter a content';
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
