import styles from './styles.module.scss';

const Loader = ({ loading }: { loading?: boolean }) => {
  if (loading) {
    return (
      <div className={styles.loader} />
    )
  }
  return <div />
};

export default Loader;
