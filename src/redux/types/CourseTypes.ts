import { course } from '../interfaces/course';

export const GET_COURSES = 'GET_COURSES';

export interface GetCoursesStateType {
  courses: course[];
}

interface GetCourseActionType {
  type: typeof GET_COURSES;
  payload: course[];
}
export type CourseActionTypes = GetCourseActionType;