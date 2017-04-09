import React, {Component} from 'react';

//93 把reducer 里面装入state里面的东西调入 component
import { connect } from 'react-redux';
import {fetchPost} from '../actions/index';

class PostsShow extends Component {
  componentWillMount(){
    this.props.fetchPost(this.props.params.id);
  }
  render() {
    return <div>Show post {this.props.params.id}</div>
  }
}

export default connect(null,{fetchPost})(PostsShow);
