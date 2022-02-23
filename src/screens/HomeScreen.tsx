import { FC } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import styles from '../styles/HomeScreen.module.scss';

const HomeScreen: FC = () => {
  return (
    <div className={styles.container}>
      <Header filter={false} />
      <div className={styles.center}>
        <Link to='/albums'>
          <button className={styles.button}>GET ALBUMS</button>
        </Link>
      </div>
    </div>
  );
};

export default HomeScreen;
