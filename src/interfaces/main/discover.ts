export interface IDurationRange {
  minHours: number;
  maxHours: number;
  label: string;
}
export interface IFoucsArea {
  id: number;
  imageUrl: string;
  name: string;
}
export interface ILevel {
  id: number;
  name: string;
}
export interface ISuggestedProgram {
  classesCount: number;
  id: number;
  imageUrl: string;
  isFavorite: boolean;
  levelName: string;
  title: string;
  totalCalories: number;
}
export interface ISuggestedVideo {
  calories: number;
  durationMinutes: number;
  id: number;
  imageUrl: string;
  level: string;
  title: string;
}
export interface IWorkouts {
  durationRanges: IDurationRange[];
  filterBodyFocsArea: IFoucsArea[];
  levels: ILevel[];
  suggestedPrograms: ISuggestedProgram[];
}
export interface IVideos {
  durationRanges: IDurationRange[];
  filterBodyFocsArea: IFoucsArea[];
  levels: ILevel[];
  suggestedVideos: ISuggestedVideo[];
}
export interface IFilterWorkouts {
  filterBodyFocsAreaIds: number[];
  minHours: number;
  maxHours: number;
  levelId: number;
}
export interface IFilterVideos {
  filterBodyFocsAreaIds: number[];
  minHours: number;
  maxHours: number;
  levelId: number;
}
export interface IDiscoverFilters {
  section: string;
  focusAreaIds?: number[];
  minHours?: number | null;
  maxHours?: number | null;
  levelId?: number | null;
}
export interface IDiscoverFiltersWithPagination extends IDiscoverFilters {
  page: number;
}
