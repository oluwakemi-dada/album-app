import { AlbumListState, AlbumFiltersState } from '.';

export interface ReduxState {
  albumList: AlbumListState;
  albumFilters: AlbumFiltersState;
}
