import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: false,
    maxlength: 50,
  },
  password: {
    type: String,
    required: false,
    maxlength: 50,
  },
  username: {
    type: String,
    required: true,
    maxlength: 50,
  },
  yearlyGoals: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "YearlyGoal",  
  }],
  monthlyGoals: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "MonthlyGoal", 
  }],
  weeklyGoals: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "WeeklyGoal",  
  }],
  dailyGoals: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "DailyGoal",
  }]
});

export default mongoose.model("User", UserSchema);