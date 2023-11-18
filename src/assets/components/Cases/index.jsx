import styles from './Cases.module.scss';
import { GoArrowRight } from 'react-icons/go';

export default function Cases({ Company, Case, children, Img }) {
  return (
    <div className={styles.wrapper}>
      <img src={Img} alt='' className={styles.wrapper__img} />
      <div className={styles.wrapper__container}>
        <div className={styles.wrapper__info}>
          <h3 className={styles.wrapper__info_company}>{Company}</h3>
          <h2 className={styles.wrapper__info_case}>{Case}</h2>
          <p className={styles.wrapper__info_text}>{children}</p>
        </div>
        <a href={`/${Case.toLowerCase()}`} className={styles.wrapper__button}>
          View <GoArrowRight size='20px' />
        </a>
      </div>
    </div>
  );
}
