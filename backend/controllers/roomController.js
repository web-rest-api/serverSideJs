import {
    findAllRooms,
    findRoomById,
    createRoomService,
    updateRoomService,
    deleteRoomService,
} from "../services/roomService.js";

const toRoomDTO = (room) => ({
    id: room._id,
    number: room.number,
    building: room.building,
    capacity: room.capacity,
    type: room.type,
});

export const getAllRooms = async (req, res) => {
    try {
        const rooms = await findAllRooms();
        res.status(200).json(rooms.map(toRoomDTO));
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const getRoomById = async (req, res) => {
    try {
        const room = await findRoomById(req.params.id);
        if (!room) return res.status(404).json({ message: "Room not found" });
        res.status(200).json(toRoomDTO(room));
    } catch {
        res.status(400).json({ message: "Invalid room ID" });
    }
};

export const createRoom = async (req, res) => {
    try {
        const { number, building, capacity, type } = req.body;
        const room = await createRoomService({ number, building, capacity, type });
        res.status(201).json(toRoomDTO(room));
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

export const updateRoom = async (req, res) => {
    try {
        const updated = await updateRoomService(req.params.id, req.body);
        if (!updated) return res.status(404).json({ message: "Room not found" });
        res.status(200).json(toRoomDTO(updated));
    } catch {
        res.status(400).json({ message: "Invalid room ID" });
    }
};

export const deleteRoom = async (req, res) => {
    try {
        const deleted = await deleteRoomService(req.params.id);
        if (!deleted) return res.status(404).json({ message: "Room not found" });
        res.status(200).json({ message: "Room deleted" });
    } catch {
        res.status(400).json({ message: "Invalid room ID" });
    }
};