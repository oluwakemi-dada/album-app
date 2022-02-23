import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../store';
import { listAlbums, filteredAlbums } from '../actions/albumActions';
import { Album as AlbumType, ReduxState } from '../types';
import Header from '../components/Header';
import Album from '../components/Album';
import styles from '../styles/AlbumListScreen.module.scss';

const AlbumListScreen: FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  // SELECTORS
  const albumList = useSelector((state: ReduxState) => state.albumList);
  const { loading, albums, error } = albumList;

  const albumFilters = useSelector((state: ReduxState) => state.albumFilters);
  const { source } = albumFilters;

  useEffect(() => {
    if (!albums) {
      dispatch(listAlbums());
    }
  }, [dispatch, albums]);

  return (
    <div>
      <Header />
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>Error</h2>
      ) : (
        <>
          <h1>{source[0].toUpperCase() + source.slice(1) + ' albums'}</h1>
          <div className={styles.albums}>
            {albums &&
              filteredAlbums(albums, source).map((album: AlbumType) => (
                <Album key={album.id} album={album} />
              ))}
          </div>
        </>
      )}
    </div>
  );
};

export default AlbumListScreen;
