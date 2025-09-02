export interface IFav {
  id: number;
  imageUrl: string;
  title: string;
  isProgram: boolean;
  isFavorite: boolean;
}
export interface IFavToggle {
  itemId: number;
  isProgram: boolean;
}
