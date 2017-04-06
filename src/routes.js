//add by 73
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';

//add postindex from posts_index 76
import PostIndex from './components/posts_index'

// 75 add some div to test router
const Greating = ()=> {
  return <div>hey there </div>
}
//add router tree for childern
export default(
<Route path ="/" component={App}>
  <IndexRoute component={PostIndex} />
  {/*
    add indexroute 之后，就把 router 给 放弃了。
    <Route path="greet" component={Greating} />
    <Route path="greet2" component={Greating} />
    <Route path="greet3" component={Greating} />
    */}

</Route>
);
