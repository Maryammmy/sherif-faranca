export interface IFilters {
  filterBodyFocsArea: IFilter[];
  i_dLikeTo: IFilter[];
  whatWorkOutPrefer: ISubFilter[];
  durationRanges: IDuration[];
  levels: ISubFilter[];
}
export interface IFilter {
  id: number;
  name: string;
  imageUrl: string;
}
export interface ISubFilter {
  id: number;
  name: string;
}
export interface IDuration {
  minDuration: number;
  maxDuration: number;
}
export interface IApplyFilters {
  filterBodyFocsAreaIds?: number[];
  i_dLikeToId?: number | null;
  whatWorkOutPreferIds?: number[];
  minDurationMinutes?: number | null;
  maxDurationMinutes?: number | null;
  levelId?: number | null;
}
export interface IFiltersResult {
  id: number;
  title: string;
  imageUrl: string;
  level: string;
  durationMinutes: number;
  calories: number;
}
