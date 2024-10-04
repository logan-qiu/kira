import { Router } from "express";
import { getTeams } from "../controllers/teamController";
import { getUserTasks } from "../controllers/taskController";

const router = Router();

router.get("/", getTeams);
router.get("/user/:userId", getUserTasks);

export default router;
