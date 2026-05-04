export const validateCourse = (req, res, next) => {
    const { title, description, credits, instructor } = req.body

    const reject = (message) => res.status(400).json({ message })

    const isValidText = (val) => /^[a-zA-ZÀ-ÿ0-9\s',.\-:!?()]+$/.test(val.trim())
    const isValidName = (val) => /^[a-zA-ZÀ-ÿ\s'\-]+$/.test(val.trim())

    // Title
    if (!title) return reject("Title field is required")
    if (!isValidText(title)) return reject("Title contains invalid characters")
    if (title.trim().length < 3) return reject("Title must be at least 3 characters")

    // Description
    if (!description) return reject("Description field is required")
    if (!isValidText(description)) return reject("Description must contain only letters, numbers, spaces, hyphens, or punctuation marks")
    if (description.trim().length < 10) return reject("Desciption must be at least 10 characters")

    // Credits
    if (!credits) return reject("Credits field is required")
    if (credits < 1 || credits > 10) return reject("ERR: 1 <= Credits <= 10")
    if (!Number.isInteger(Number(credits))) return reject("Credits must be a whole number")

    // Instructor
    if (!instructor) return reject("Instructor field is required")
    if (!isValidName(instructor)) return reject("Instructor field must contain only letters, spaces, hyphens, or apostrophes characters")
    if (instructor.trim().length < 3) return reject("Instructor's field must be at least 3 characters")

    next()
}