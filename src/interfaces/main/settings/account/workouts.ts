export interface IHistoryWorkout {
  calories: number;
  durationMinutes: number;
  id: number;
  imageUrl: string;
  title: string;
  watchedDate: string;
}
export interface IRecentWorkout {
  completedDays: number;
  id: number;
  title: string;
  totalDays: number;
}
export interface IFavWorkout {
  id: number;
  imageUrl: string;
  title: string;
}
