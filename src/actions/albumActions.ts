import axios from 'axios';
import { AlbumListActionTypes, AlbumFiltersActionTypes, Album } from '../types';
import { AppThunk } from '../store';

// LIST ALBUMS
export const listAlbums = (): AppThunk => async (dispatch) => {
  try {
    dispatch({ type: AlbumListActionTypes.ALBUM_LIST_REQUEST });

    const { data } = await axios.get<Album[]>('assets/albums.json');

    dispatch({
      type: AlbumListActionTypes.ALBUM_LIST_SUCCESS,
      payload: data,
    });
  } catch (error: any) {
    dispatch({
      type: AlbumListActionTypes.ALBUM_LIST_FAILURE,
      payload: 'Products not found',
    });
  }
};

export const setAlbumSourceFilter =
  (source: string): AppThunk =>
  async (dispatch) => {
    dispatch({
      type: AlbumFiltersActionTypes.SET_ALBUM_SOURCE_FILTER,
      payload: source,
    });
  };

export const filteredAlbums = (albums: Album[], filter: string) =>
  albums &&
  albums.filter((album) => {
    // If 'All' is selected
    const allSources = () => {
      if (filter === 'all') {
        return albums;
      }
    };

    const sourceMatch =
      album.source.toLowerCase() === filter.toLowerCase() || allSources();

    return sourceMatch;
  });
