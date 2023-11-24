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
          <div className={styles.wrapper__work_container}>
            <Cases
              Company='Grupo Boticário'
              Case='Mensageria'
              Img='assets/img/mensageria/mensageria-banner.png'
            >
              The project focuses on advancing communication for beauty
              establishments by offering automated messaging services through
              WhatsApp, using Salão 99 platform. This approach significantly
              improves customer relations and modernizes the way salons interact
              with their clients.
            </Cases>
          </div>
        </section>
      </main>
    </>
  );
}
