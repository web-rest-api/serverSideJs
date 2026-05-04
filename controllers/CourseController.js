import {
  findAllCourses,
  findCourseById,
  createCourseService,
  updateCourseService,
  deleteCourseService,
} from "../services/CourseService.js"

export const getAllCourses = async (req, res) => {
  try {
    const courses = await findAllCourses()
    res.status(200).json(courses)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const getCourseById = async (req, res) => {
  try {
    const course = await findCourseById(req.params.id)
    if (!course) return res.status(404).json({ message: "Course not found" })
    res.status(200).json(course)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const createCourse = async (req, res) => {
  try {
    const newCourse = await createCourseService(req.body)
    res.status(201).json(newCourse)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export const updateCourse = async (req, res) => {
  try {
    const updatedCourse = await updateCourseService(req.params.id, req.body)
    if (!updatedCourse) return res.status(404).json({ message: "Course not found" })
    res.status(200).json(updatedCourse)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const deleteCourse = async (req, res) => {
  try {
    const deletedCourse = await deleteCourseService(req.params.id)
    if (!deletedCourse) return res.status(404).json({ message: "Course not found" })
    res.status(200).json({ message: "Course deleted successfully" })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}