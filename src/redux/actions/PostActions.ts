import { GET_POSTS, PostActionTypes } from '../types/PostTypes';
import { Post } from '../interfaces/post';

export const getPostsAction = (employees: Post[]): PostActionTypes => {
  return {
    type: GET_POSTS,
    payload: employees
  };
};