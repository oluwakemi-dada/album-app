import { FC } from 'react';
import { Link } from 'react-router-dom';
import Filter from './Filter';
import styles from '../styles/Header.module.scss';

interface HeaderProps {
  homeScreen?: boolean;
}

const Header: FC<HeaderProps> = ({ homeScreen }) => {
  return (
    <nav className={styles.container}>
      <Link to='/'>
        <h1>innuos</h1>
      </Link>
      {!homeScreen && <Filter />}
    </nav>
  );
};

Header.defaultProps = {
  homeScreen: false,
};

export default Header;
