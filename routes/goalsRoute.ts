import express from "express";
import {addYearlyGoal, addMonthlyGoal, addWeeklyGoal, addDailyGoal} from "../controllers/addGoals"
const router = express.Router();

router.post("/addyeargoal", addYearlyGoal);
router.post("/addmonthgoal", addMonthlyGoal);
router.post("/addweeklygoal", addWeeklyGoal);
router.post("/adddailygoal", addDailyGoal);

export default router;