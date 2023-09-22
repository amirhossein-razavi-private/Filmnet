import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

const Home = () => (
  <div className={styles.main}>
    <Link to="/contents">Movies page</Link>
    &nbsp;
    Welcome to Home page
  </div>
);

export default Home;
