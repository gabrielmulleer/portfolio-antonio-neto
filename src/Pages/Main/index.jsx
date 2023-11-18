import styles from './Main.module.scss';
import Tag from '../../assets/components/Tag';
import Cases from '../../assets/components/Cases';

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
        <section className={styles.wrapper__work}>
          <Tag>WORK</Tag>
          <Cases
            Company='Grupo Boticário'
            Case='Mensageria'
            Img='https://source.unsplash.com/random/300x300?r=2'
          >
            Lorem ipsum dolor sit amet consectetur. Blandit non massa
            pellentesque velit nunc in a fringilla tortor.
          </Cases>
          <Cases
            Company='Accenture'
            Case='Consulting'
            Img='https://source.unsplash.com/random/300x300?r=1'
          >
            Lorem ipsum dolor sit amet consectetur. Blandit non massa
            pellentesque velit nunc in a fringilla tortor.
          </Cases>
        </section>
      </main>
    </>
  );
}
