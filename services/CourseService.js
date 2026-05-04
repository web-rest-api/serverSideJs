import Course from "../models/CourseModel.js"

export const findAllCourses = () => Course.find()

export const findCourseById = (id) => Course.findById(id)

export const createCourseService = (courseData) => Course.create(courseData)

export const updateCourseService = (id, courseData) => 
  Course.findByIdAndUpdate(id, courseData, { new: true })

export const deleteCourseService = (id) => Course.findByIdAndDelete(id)