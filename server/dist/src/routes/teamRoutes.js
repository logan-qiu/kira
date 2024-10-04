"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const teamController_1 = require("../controllers/teamController");
const taskController_1 = require("../controllers/taskController");
const router = (0, express_1.Router)();
router.get("/", teamController_1.getTeams);
router.get("/user/:userId", taskController_1.getUserTasks);
exports.default = router;
