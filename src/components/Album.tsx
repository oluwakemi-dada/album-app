import { FC } from 'react';
import { Album as AlbumTypes } from '../types';
import styles from '../styles/Album.module.scss';

interface AlbumProps {
  album: AlbumTypes;
}

const Album: FC<AlbumProps> = ({ album }) => {
  return (
    <div className={styles.container}>
      <div className={styles.cover}>
        <img
          src={
            album.cover
              ? `/assets/images/${album.cover}`
              : `/assets/images/undefined_album_cover.png`
          }
          alt='album cover'
        />
        {album.source !== 'LOCAL' && (
          <img
            src='/assets/images/qobuz.png'
            alt='streaming service'
            className={styles.streamingService}
          />
        )}
      </div>
      <p className={styles.title}>{album.album}</p>
      <p className={styles.artist}>{album.artist}</p>
    </div>
  );
};

export default Album;
