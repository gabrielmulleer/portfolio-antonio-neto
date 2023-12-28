import styles from './Links.module.scss';
export default function Links({ children }) {
  return (
    <a
      className={styles.wrapper}
      href={
        children.toLowerCase() === 'home' ? '/' : `/${children.toLowerCase()}`
      }
    >
      {children}
    </a>
  );
}
