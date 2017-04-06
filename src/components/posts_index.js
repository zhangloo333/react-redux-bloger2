import React, {Component} from 'react';

//81
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {fetchPosts} from '../actions/index';


//76
// export default () => {
//   return <div>List of Blog posts.</div>
// }

//80 fetching data
class PostIndex extends Component {
  componentWillMount() {
    // console.log('this would be a good time to call acntion')
    //81
    this.props.fetchPosts();

  }
  render() {
    return (
      <div> List of blog posts</div>
    );
  }
 }

// export default PostIndex

// bind container with components
 function mapDispatchToProps(dispatch) {
   return bindActionCreators({fetchPosts}, dispatch);
 }

// export default connect(null,mapDispatchToProps)(PostIndex);
//上面的简便写法
// export default connect(null,{fetchPosts:fetchPosts})(PostIndex);
export default connect(null,{fetchPosts})(PostIndex);
