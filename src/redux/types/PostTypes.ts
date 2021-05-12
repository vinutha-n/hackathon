import { Post } from '../interfaces/post';

export const GET_POSTS = 'GET_POSTS';

export interface GetPostsStateType {
  employees: Post[];
}

interface GetPostsActionType {
  type: typeof GET_POSTS;
  payload: Post[];
}
export type PostActionTypes = GetPostsActionType;