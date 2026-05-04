import {
    findAllGrades,
    findGradeById,
    findGradesByStudent,
    createGrade,
    updateGrade,
    deleteGrade,
} from "../services/gradesService.js";

export const getAllGrades = async (req, res) => {
    try {
        const grades = await findAllGrades();
        res.status(200).json(grades);
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
};

export const getGradeById = async (req, res) => {
    // TODO: fetch a single grade by its id
    // hint: look at getStudentById in studentsController for reference
};

export const getGradesByStudent = async (req, res) => {
    // TODO: return all grades for a given student
    // the student id comes from req.params.studentId
};

export const createGradeHandler = async (req, res) => {
    // TODO: create a new grade from req.body
    // return 201 on success, 400 on error
};

export const updateGradeHandler = async (req, res) => {
    // TODO: update a grade by id
    // return 404 if not found, 400 on bad id
};

export const deleteGradeHandler = async (req, res) => {
    // TODO: delete a grade by id
    // return 404 if not found, 400 on bad id
};
