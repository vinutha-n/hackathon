import { GET_COURSES, CourseActionTypes } from '../types/CourseTypes';
import { course } from '../interfaces/course';

export const getCoursesAction = (courses: course[]): CourseActionTypes => {
  return {
    type: GET_COURSES,
    payload: courses
  };
};