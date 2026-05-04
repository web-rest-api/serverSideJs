import Course from "../models/Course.js";

export const findAllCourses = () => Course.find();

export const findCourseById = (id) => Course.findById(id);

export const createCourseService = (data) => Course.create(data);

export const updateCourseService = (id, data) =>
    Course.findByIdAndUpdate(id, data, { new: true });

export const deleteCourseService = (id) => Course.findByIdAndDelete(id);