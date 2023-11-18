import React from 'react';
import styles from './Header.module.scss';
import { IoIosMenu } from 'react-icons/io';

export default function Header() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper__logo}>
        <img
          className={styles.wrapper__logo_svg}
          src='/assets/img/Logo.svg'
          alt='Logo Antonio Neto'
        />
        <h3 className={styles.wrapper__logo_title}>Antônio Neto</h3>
      </div>
      <IoIosMenu size='30px' color='#333' />
    </div>
  );
}
