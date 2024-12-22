import mongoose from 'mongoose';

const WeeklyGoalSchema = new mongoose.Schema({
  goal: {
    type: String,
    required: true,
    maxlength: 255,  
  },
  startDate: {
    type: Date,
    required: true,  
  },
  endDate: {
    type: Date,
    required: false,  
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
  dailyCheckPoints: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "DailyGoal",  // Reference to DailyGoal model
  }]
});

export default mongoose.model("WeeklyGoal", WeeklyGoalSchema);