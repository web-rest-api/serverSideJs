import Room from "../models/Room.js";

export const findAllRooms = () => Room.find();

export const findRoomById = (id) => Room.findById(id);

export const createRoomService = (data) => Room.create(data);

export const updateRoomService = (id, data) =>
    Student.findByIdAndUpdate(id, data, { new: true });

export const deleteRoomService = (id) => Student.findByIdAndDelete(id);
