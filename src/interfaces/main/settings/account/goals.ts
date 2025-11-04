export interface IGoal {
  label: string;
  value: string;
}
export interface ITargetWeight {
  weight: number;
}
export interface ITargetGoal {
  goalId: number;
}
export interface IMyGoal {
  drinkingGoals: number;
  fitnessGoal: string;
  startingWeight: number;
  stepGoals: number;
  targetWeight: number;
}
export interface IWeeklySummary {
  day: string;
  steps: number;
}
export interface IStep {
  todaySteps: number;
  stepsGoal: number;
  weekRange: string;
  weeklySummary: IWeeklySummary[];
  weeklyTotal: number;
}
export interface ICustomStepGoal {
  stepGoals: number;
}
export interface IRecommendedStepGoal {
  id: number;
}
export interface IRecommended {
  id: number;
  title: string;
  steps: string;
}
