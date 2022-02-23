import { Album } from '.';

export interface AlbumListState {
  loading: boolean;
  albums?: Album[];
  error?: undefined;
}

export enum AlbumListActionTypes {
  ALBUM_LIST_REQUEST = 'ALBUM_LIST_REQUEST',
  ALBUM_LIST_SUCCESS = 'ALBUM_LIST_SUCCESS',
  ALBUM_LIST_FAILURE = 'ALBUM_LIST_FAILURE',
}

export interface GetAlbumsRequestAction {
  type: AlbumListActionTypes.ALBUM_LIST_REQUEST;
}

export interface GetAlbumsSuccessAction {
  type: AlbumListActionTypes.ALBUM_LIST_SUCCESS;
  payload: { Albums: Album[] };
}

export interface GetAlbumsFailureAction {
  type: AlbumListActionTypes.ALBUM_LIST_FAILURE;
  payload: any;
}

export type AlbumListAction =
  | GetAlbumsSuccessAction
  | GetAlbumsFailureAction
  | GetAlbumsRequestAction;
