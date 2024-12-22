import mongoose from 'mongoose';

const MonthlyGoalSchema = new mongoose.Schema({
  goal: {
    type: String,
    required: true,
    maxlength: 255,  // Goal description length limit
  },
  startDate: {
    type: Date,
    required: true,  // Start date is mandatory
  },
  endDate: {
    type: Date,
    required: false,  // End date is optional
  },
  description: {
      type: String,
      required: false,
      maxlength: 1000,
    },
    completed: {
      type: Boolean,
      default: false,
      required: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  weeklyCheckPoints: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "WeeklyGoal",  // Reference to WeeklyGoal model
  }],
});

export default mongoose.model("MonthlyGoal", MonthlyGoalSchema);