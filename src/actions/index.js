import axios from 'axios';

// fist defined our export type
export const FETCH_POSTS = 'FETCH_POSTS';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY ='?key=leoz123455';

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
      type: FETCH_POSTS,
      payload: request
  }
}
