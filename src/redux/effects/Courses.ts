import { getCoursesAction } from '../actions/CourseActions';
import { Dispatch } from 'redux';
import { CourseActionTypes } from '../types/CourseTypes';
export const getCourses = () => {
  return function (dispatch: Dispatch<CourseActionTypes>) {
    const COURSE_URL = 'http://localhost:3000/courses';
    fetch(COURSE_URL, {
      method: 'GET'
    })
      .then(res => res.json())
      .then(data => {
          console.log("crseData", data);
        dispatch(getCoursesAction(data));
        return data;
      });
  };
};