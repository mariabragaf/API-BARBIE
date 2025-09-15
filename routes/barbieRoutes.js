import express from "express";
import { getAll, getById, create, remove, updateBarbie } from "../controllers/barbieController.js";

const router = express.Router();

router.get("/", getAll);
router.get("/:id", getById);
router.post("/", create);
router.delete("/:id", remove);
router.put("/:id", updateBarbie);

export default router;