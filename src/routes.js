//add by 73
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';

// 75 add some div to test router
const Greating = ()=> {
  return <div>hey there </div>
}

export default(
<Route path ="/" component={App}>
  <Route path="greet" component={Greating} />
  <Route path="greet2" component={Greating} />
  <Route path="greet3" component={Greating} />
</Route>
);
