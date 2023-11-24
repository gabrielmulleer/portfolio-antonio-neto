import styles from './Mensageria.module.scss';
export default function Mensageria() {
  return (
    <>
      <div className={styles.wrapper}>
        <img src='#' alt='Mensageria Banner' />
        <h1 className={styles.wrapper__title}>
          Automated messages via Whatsapp
        </h1>
        <div className={styles.wrapper__intro}>
          <div className={styles.wrapper__intro_container}>
            <div className={styles.wrapper__tags}>
              <h2 className={styles.wrapper__tags_tag}>Summary</h2>
            </div>
            <p className={styles.wrapper__text}>
              The project focuses on advancing communication for beauty
              establishments by offering automated messaging services through
              WhatsApp, using Salão 99 platform. This approach significantly
              improves customer relations and modernizes the way salons interact
              with their clients.
            </p>
          </div>
          <div className={styles.wrapper__intro_container}>
            <div className={styles.wrapper__tags}>
              <h2 className={styles.wrapper__tags_tag}>Role</h2>
            </div>
            <p className={styles.wrapper__text}>Product Designer</p>
          </div>
          <div className={styles.wrapper__intro_container}>
            <div className={styles.wrapper__tags}>
              <h2 className={styles.wrapper__tags_tag}>Platforms</h2>
            </div>
            <div className={styles.wrapper__platforms_container}>
              <p className={styles.wrapper__text}>Web</p>
              <p className={styles.wrapper__text}>Mobile</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
