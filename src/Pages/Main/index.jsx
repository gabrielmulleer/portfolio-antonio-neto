import styles from './Main.module.scss';
import Tag from '../../assets/components/Tag';

export default function Main() {
  return (
    <>
      <main className={styles.wrapper}>
        <section className={styles.wrapper__who}>
          <Tag>WHO</Tag>
          <p className={styles.wrapper__who_text}>
            I’m a Product designer.
            <br />
            <br />
            Based in Brazil, currently designing at Grupo Boticário.
          </p>
        </section>
      </main>
    </>
  );
}
