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
        <div className={styles.wrapper__container}>
          <nav className={styles.wrapper__container_sidebar}>
            <ul>
              <li>Challenge</li>
              <li>Research</li>
              <li>Defining</li>
              <li>Ideation</li>
              <li>Concept</li>
              <li>Result</li>
              <li>Back to top</li>
            </ul>
          </nav>
          <div className={styles.wrapper__container_content}>
            <section>
              <h2>Challenge</h2>
              <h3>Identifying the Problem</h3>
              <p>
                In the dynamic world of beauty salons, effective communication
                with clients is crucial. Salons face a significant challenge:
                the manual and time-consuming process of sending appointment
                reminders via WhatsApp. This traditional method is prone to
                errors and forgetfulness, leading to no-shows which negatively
                impact the salon's revenue and operational efficiency.
              </p>
              <h3>The Need for an Innovative Solution</h3>
              <p>
                The need was clear: a solution that would automate
                communication, ensuring clients received timely and personalized
                reminders, and at the same time, be user-friendly for salon
                professionals. This challenge presented a unique opportunity to
                explore how UX can transform a routine task into a more
                efficient and enjoyable experience for both salons and their
                clients.
              </p>
            </section>
            <section>
              <h2>Research</h2>
            </section>
            <section>
              <h2>Defining</h2>
            </section>
            <section>
              <h2>Ideation</h2>
            </section>
            <section>
              <h2>Concept</h2>
            </section>
            <section>
              <h2>Result</h2>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
