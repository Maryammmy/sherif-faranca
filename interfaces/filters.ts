export interface IFilters {
  filterBodyFocsArea: IFilter[];
  i_dLikeTo: IFilter[];
  whatWorkOutPrefer: ISupFilter[];
  durationRanges: IDuration[];
  levels: ISupFilter[];
}
export interface IFilter {
  id: number;
  name: string;
  imageUrl: string;
}
export interface ISupFilter {
  id: number;
  name: string;
}
export interface IDuration {
  minDuration: number;
  maxDuration: number;
}
