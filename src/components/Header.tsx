import { FC } from 'react';
import { Link } from 'react-router-dom';
import Filter from './Filter';
import styles from '../styles/Header.module.scss';

interface HeaderProps {
  filter?: boolean;
}

const Header: FC<HeaderProps> = ({ filter }) => {
  return (
    <nav className={styles.container}>
      <Link to='/'>
        <h1 className={styles.logo}>innuos</h1>
      </Link>
      {filter && <Filter />}
    </nav>
  );
};

Header.defaultProps = {
  filter: true,
};

export default Header;
