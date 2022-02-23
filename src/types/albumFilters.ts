export interface AlbumFiltersState {
  source: string;
}

export enum AlbumFiltersActionTypes {
  SET_ALBUM_SOURCE_FILTER = 'SET_ALBUM_SOURCE_FILTER',
}

export interface SetAlbumSourceFilterAction {
  type: AlbumFiltersActionTypes.SET_ALBUM_SOURCE_FILTER;
  payload: string;
}

export type AlbumFiltersAction = SetAlbumSourceFilterAction;
