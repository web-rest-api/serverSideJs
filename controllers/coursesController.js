import {
  findAllCourses,
  findCourseById,
  createCourse,
  updateCourse,
  deleteCourse,
} from "../services/coursesService.js";

const toCourseDTO = (course) => ({
  id: course._id,
  title: course.title,
  description: course.description,
  credits: course.credits,
  instructor: course.instructor,
});

export const getAllCourses = async (req, res) => {
  try {
    const courses = await findAllCourses();
    res.status(200).json(courses.map(toCourseDTO));
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getCourseById = async (req, res) => {
  try {
    const course = await findCourseById(req.params.id);
    if (!course) return res.status(404).json({ message: "Course not found" });
    res.status(200).json(toCourseDTO(course));
  } catch {
    res.status(400).json({ message: "Invalid course ID" });
  }
};

export const createCourseHandler = async (req, res) => {
  try {
    const { title, description, credits, instructor } = req.body;
    const course = await createCourse({ title, description, credits, instructor });
    res.status(201).json(toCourseDTO(course));
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const updateCourseHandler = async (req, res) => {
  try {
    const updated = await updateCourse(req.params.id, req.body);
    if (!updated) return res.status(404).json({ message: "Course not found" });
    res.status(200).json(toCourseDTO(updated));
  } catch {
    res.status(400).json({ message: "Invalid course ID" });
  }
};

export const deleteCourseHandler = async (req, res) => {
  try {
    const deleted = await deleteCourse(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Course not found" });
    res.status(200).json({ message: "Course deleted" });
  } catch {
    res.status(400).json({ message: "Invalid course ID" });
  }
};
