export interface IQuestionData {
  src: string;
  label: string;
}
export interface IColoredText {
  firstColoredText: string;
  lastColoredText: string;
}
export interface IWorkoutFrequency {
  src: string;
  label: string;
  value: number;
}
export interface IArea {
  id: number;
  name: string;
}
export interface IQuestion {
  id: number;
  name: string;
  imageUrl: string;
}
export interface IFitnessLevel {
  id: number;
  name: string;
  imageUrl: string;
  description: string;
}
export interface ISupQuestion {
  id: number;
  name: string;
}
export interface IPreferences {
  isMale: boolean;
  goalId: number;
  bodyShapeId: number;
  levelId?: number;
  workoutTimeId?: number;
  idealBodyTimeId?: number;
  heightCm: number;
  weightKg: number;
  trainingPerWeek?: number;
  selectedTrainingAreaIds: number[];
  selectedMusicIds?: number[];
  injuryIds?: number[];
}
