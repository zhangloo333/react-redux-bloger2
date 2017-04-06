import React, {Component} from 'react';

//76

// export default () => {
//   return <div>List of Blog posts.</div>
// }


//80 fetching data
class PostIndex extends Component {
  componentWillMount() {
    console.log('this would be a good time to call acntion')
    // this.props.fetchPosts();

  }
  render() {
    return (
      <div> List of blog posts</div>
    );
  }
 }

export default PostIndex
