export interface IProgram {
  activeDays: number;
  atGym: string;
  category: string;
  description: string;
  equipments: string;
  expectedResults: string[];
  id: number;
  imageUrl: string;
  isFavorite: boolean;
  level: string;
  time: string;
  timetotal: string;
  title: string;
  whatThisProgramOffer: string[];
}
export interface IProgramBackground {
  title: string;
  imageUrl: string;
  level: string;
  timeTotal: string;
  category: string;
  isFavorite: boolean;
}
interface IDay {
  dayId: number;
  dayNumber: number;
  isCompleted: boolean;
}
interface IWeek {
  days: IDay[];
  weekNumber: number;
}
export interface IProgramDays {
  completedDays: number;
  id: number;
  imageUrl: string;
  isFavorite: boolean;
  title: string;
  totalDays: number;
  weeks: IWeek[];
}
export interface IExercise {
  title: string;
  exerciseId: number;
  imageUrl: string;
  calories: number;
  focusArea: string;
  durationMinutes: number;
  isWatched: boolean;
  isFavorite: boolean;
}
export interface ISuggestion {
  programId: number;
  imageUrl: string;
  title: string;
  level: string;
  calories: number;
  timeMinutes: number;
}
export interface IProgramDay {
  dayDescription: string;
  dayTitle: string;
  exercises: IExercise[];
  focusArea: string;
  level: string;
  programImageUrl: string;
  programTitle: string;
  suggestions: ISuggestion[];
  totalTimeMinutes: number;
}
export interface IExerciseDetails {
  description: string;
  exerciseId: number;
  focusAreas: string[];
  imageUrl: string;
  isFavorite: boolean;
  musclesImageUrl: string[];
  title: string;
  videoUrl: string;
}
