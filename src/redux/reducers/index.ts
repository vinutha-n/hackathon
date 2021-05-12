import { combineReducers } from 'redux';
import { getPostsReducer } from './PostReducer';
import {getCoursesReducer} from './CourseReducer';

const rootReducer = combineReducers({
  employees: getPostsReducer,
  courses: getCoursesReducer
});

export default rootReducer;