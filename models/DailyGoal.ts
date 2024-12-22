import mongoose from 'mongoose';

const DailyGoalSchema = new mongoose.Schema({
  goal: {
    type: String,
    required: true,
    maxlength: 255,  // Goal description length limit
  },
  description: {
      type: String,
      required: false,
      maxlength: 1000,
  },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
  },
  startDate: {
    type: Date,
    required: true,  // Start date is mandatory
  },
  endDate: {
    type: Date,
    required: false,  // End date is optional
  },
  completed: {
    type: Boolean,
    default: false,
    required: true,
  }
});

export default mongoose.model("DailyGoal", DailyGoalSchema);