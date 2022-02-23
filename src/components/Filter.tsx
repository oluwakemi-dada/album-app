import { FC, ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FiFilter } from 'react-icons/fi';
import { ReduxState } from '../types';
import { setAlbumSourceFilter } from '../actions/albumActions';
import styles from '../styles/Filter.module.scss';

const Filter: FC = () => {
  const dispatch = useDispatch();

  // SELECTORS
  const albumList = useSelector((state: ReduxState) => state.albumList);
  const { albums } = albumList;

  const albumFilters = useSelector((state: ReduxState) => state.albumFilters);
  const { source } = albumFilters;

  // GET UNIQUE SOURCE FILTER ARRAY
  let uniqueSources;

  if (albums) {
    const sourceArr = albums.map((item) => item.source);
    uniqueSources = [...new Set(sourceArr)];
  }

  // CHANGE SOURCE
  const onChangeAlbumSource = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setAlbumSourceFilter(e.target.value));
  };

  return (
    <div className={styles.container}>
      <FiFilter />
      <select
        name='source'
        value={source}
        onChange={(e) => onChangeAlbumSource(e)}
      >
        <option value='all'>all albums</option>
        {uniqueSources &&
          uniqueSources.map((source, index) => (
            <option value={source.toLowerCase()} key={index}>
              {source.toLowerCase() + ' albums'}
            </option>
          ))}
      </select>
    </div>
  );
};

export default Filter;
