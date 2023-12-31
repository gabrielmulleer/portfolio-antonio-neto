import { MdOutlineMailOutline } from 'react-icons/md';
import { AiOutlineLinkedin } from 'react-icons/ai';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.wrapper}>
      <h3 className={styles.wrapper__copyright}>
        © 2023 Design by{' '}
        <a
          href='https://www.linkedin.com/in/antonioneto2606/'
          rel='noopener noreferrer'
          target='_blank'
        >
          Antonio Neto
        </a>{' '}
        and development by{' '}
        <a
          href='https://www.linkedin.com/in/gabrielmulleer'
          rel='noopener noreferrer'
          target='_blank'
        >
          Gabriel Müller
        </a>
        .
      </h3>
      <div className={styles.wrapper__icons}>
        <a
          href='https://www.linkedin.com/in/antonioneto2606/'
          rel='noopener noreferrer'
          target='_blank'
        >
          <AiOutlineLinkedin size='40px' color='#4F4F4F' />
        </a>
        <a href='mailto:aaneto2606@gmail.com'>
          <MdOutlineMailOutline size='40px' color='#4F4F4F' />
        </a>
      </div>
    </footer>
  );
}
