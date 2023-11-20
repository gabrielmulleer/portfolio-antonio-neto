import styles from './Header.module.scss';
import { IoIosMenu } from 'react-icons/io';

export default function Header() {
  return (
    <header className={styles.wrapper}>
      <div className={styles.wrapper__logo}>
        <img
          className={styles.wrapper__logo_svg}
          src='/assets/img/Logo.svg'
          alt='Logo Antonio Neto'
        />
        <h3 className={styles.wrapper__logo_title}>Antônio Neto</h3>
      </div>
      <IoIosMenu size='30px' color='#333' className={styles.wrapper__icon} />
      <nav className={styles.menu}>
        <ul className={styles.menu__dropdown}>
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#'>About</a>
          </li>
          <li>
            <a href='#'>Work</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
