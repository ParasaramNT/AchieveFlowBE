import mongoose from 'mongoose';

const YearlyGoalSchema = new mongoose.Schema({
  goal: {
    type: String,
    required: true,
    maxlength: 255,  
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
    required: true,  
  },
  endDate: {
    type: Date,
    required: false,  
  },
  completed: {
    type: Boolean,
    default: false,
    required: true,
  },
  monthlyCheckPoints: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "MonthlyGoal",  
  }],
});

export default mongoose.model("YearlyGoal", YearlyGoalSchema);