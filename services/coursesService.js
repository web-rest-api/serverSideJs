import Course from "../models/Course.js";

export const findAllCourses = () => Course.find();

export const findCourseById = (id) => Course.findById(id);

export const createCourse = (data) => Course.create(data);

export const updateCourse = (id, data) =>
  Course.findByIdAndUpdate(id, data, { new: true });

export const deleteCourse = (id) => Course.findByIdAndDelete(id);
