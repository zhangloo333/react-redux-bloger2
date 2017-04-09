import React, {Component} from 'react';

//93 把reducer 里面装入state里面的东西调入 component
import { connect } from 'react-redux';
import {fetchPost,deletePost} from '../actions/index';

//94 add linker
import {Link} from 'react-router';

class PostsShow extends Component {
  componentWillMount(){
    this.props.fetchPost(this.props.params.id);
  }
  onDeleteClick(){
    this.props.deletePost(this.props.params.id);
  }

  render() {
    const {post} = this.props;
    console.log(this.props.post);
    if(!this.props.post) {
      return <div>Loading....</div>
    }
    return (
      <div>
        <Link to="/">Back To Index</Link>
        <button className="btn btn-danger pull-xs-right"
        onClick={this.onDeleteClick.bind(this)}>
          Delete Post
        </button>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {post: state.posts.post};
}

export default connect(mapStateToProps,{fetchPost,deletePost})(PostsShow);
