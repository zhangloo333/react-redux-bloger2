import { combineReducers } from 'redux';

import PostsReducer from './reducer_posts';
// add in 78 back to redux

const rootReducer = combineReducers({
  // state: (state = {}) => state 删除了不用了
  posts: PostsReducer
});

export default rootReducer;
