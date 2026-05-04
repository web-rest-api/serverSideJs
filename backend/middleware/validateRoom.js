export const validateRoom = (req, res, next) => {
    const { number, building, capacity, type } = req.body;

    const reject = (message) => res.status(400).json({ message });

    const isValidText = (val) => /^[a-zA-ZÀ-ÿ0-9\s',.\-:!?()]+$/.test(String(val).trim());
    const isValidRoomNum = (val) => /^[a-zA-Z0-9\s-]+$/.test(String(val).trim()); 

    if (!number) return reject("Room number is required");
    if (!isValidRoomNum(number)) return reject("Room number must contain only letters, numbers, spaces, or hyphens");
    if (String(number).trim().length < 1) return reject("Room number cannot be empty");

    if (!building) return reject("Building field is required");
    if (!isValidText(building)) return reject("Building name contains invalid characters");
    if (String(building).trim().length < 2) return reject("Building name must be at least 2 characters");

    if (!capacity) return reject("Capacity field is required");
    if (Number(capacity) < 1) return reject("Capacity must be at least 1");
    if (!Number.isInteger(Number(capacity))) return reject("Capacity must be a whole number");

    if (!type) return reject("Room type field is required");
    if (!isValidText(type)) return reject("Room type contains invalid characters");
    if (String(type).trim().length < 3) return reject("Room type must be at least 3 characters");

    next();
};