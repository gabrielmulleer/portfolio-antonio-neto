import styles from './Tag.module.scss';

export default function Tag({ children }) {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.wrapper__tag}>{children}</h2>
    </div>
  );
}
