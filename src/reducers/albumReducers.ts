import {
  AlbumListActionTypes,
  AlbumListAction,
  AlbumListState,
  AlbumFiltersActionTypes,
  AlbumFiltersAction,
  AlbumFiltersState,
} from '../types';

// LIST ALBUM REDUCER
const albumListInitialState: AlbumListState = {
  loading: false,
};

export const albumListReducer = (
  state = albumListInitialState,
  action: AlbumListAction
) => {
  switch (action.type) {
    case AlbumListActionTypes.ALBUM_LIST_REQUEST:
      return {
        loading: true,
      };

    case AlbumListActionTypes.ALBUM_LIST_SUCCESS:
      return {
        loading: false,
        albums: action.payload,
      };

    case AlbumListActionTypes.ALBUM_LIST_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

// ALBUM FILTERS REDUCER
const albumFiltersInitialState: AlbumFiltersState = {
  source: 'all',
};

export const albumFiltersReducer = (
  state = albumFiltersInitialState,
  action: AlbumFiltersAction
) => {
  switch (action.type) {
    case AlbumFiltersActionTypes.SET_ALBUM_SOURCE_FILTER:
      return {
        source: action.payload,
      };

    default:
      return state;
  }
};
