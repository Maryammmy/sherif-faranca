export interface IWorkout {
  workoutProgramId: number;
  isProgram: boolean;
  calories: number;
  durationMinutes: number;
  id: number;
  imageUrl: string;
  title: string;
  watchedDate: string;
}
export interface IFavWorkout {
  id: number;
  imageUrl: string;
  title: string;
  isProgram: boolean;
  isFavorite: boolean;
}
export interface IToggleWorkout {
  itemId: number;
  isProgram: boolean;
}
