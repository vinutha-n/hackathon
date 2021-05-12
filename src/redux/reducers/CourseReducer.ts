import {
    GET_COURSES,
    GetCoursesStateType,
    CourseActionTypes
  } from '../types/CourseTypes';
  
  const initialStateGetCourses: GetCoursesStateType = {
    courses: []
  };
  
  export const getCoursesReducer = (
    state = initialStateGetCourses,
    action: CourseActionTypes
  ): GetCoursesStateType => {
    switch (action.type) {
      case GET_COURSES:
        return {
          ...state,
          courses: action.payload
        };
      default:
        return state;
    }
  };
  
  