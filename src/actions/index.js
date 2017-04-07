import axios from 'axios';

// fist defined our export type
export const FETCH_POSTS = 'FETCH_POSTS';

export const CREATE_POST = 'CREATE_POST';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY ='?key=leoz123455';

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
      type: FETCH_POSTS,
      payload: request
  }
}

// ADD ACTION FOR FORM
export function createPost(props){
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`,props);
  return {
    type:CREATE_POST,
    payload: request
  };
}
