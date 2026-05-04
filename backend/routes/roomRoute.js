import express from "express";
import * as roomController from "../controllers/roomController.js";
import authN from "../middleware/auth-middleware.js";

const roomRouter = express.Router();

roomRouter.use(authN);

roomRouter.get("/", roomController.getAllRooms);
roomRouter.get("/:id", roomController.getRoomById);
roomRouter.post("/", roomController.createRoom);
roomRouter.put("/:id", roomController.updateRoom);
roomRouter.delete("/:id", roomController.deleteRoom);

export default roomRouter;