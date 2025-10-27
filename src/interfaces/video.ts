export interface IClassBySession {
  calories: number;
  endTime: string;
  musicGenreName: string;
  name: string;
  startTime: string;
  imageUrl: string;
}
export interface IClassBySong {
  segments: IClassBySession[];
}
export interface IVideo {
  focusAreas: string[];
  classBySession: IClassBySession[];
  classBySong: IClassBySong[];
  durationInMinutes: number;
  id: number;
  imageUrl: string;
  title: string;
  videoUrl: string;
}
