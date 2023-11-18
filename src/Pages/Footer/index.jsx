import { MdOutlineMailOutline } from 'react-icons/md';
import { AiOutlineLinkedin } from 'react-icons/ai';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.wrapper}>
      <h3 className={styles.wrapper__copyright}>© 2023 Antonio Neto</h3>
      <div className={styles.wrapper__icons}>
        <AiOutlineLinkedin size='40px' color='#4F4F4F' />
        <MdOutlineMailOutline size='40px' color='#4F4F4F' />
      </div>
    </footer>
  );
}
