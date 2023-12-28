import { useState } from 'react';
import styles from './Header.module.scss';
import { IoIosMenu } from 'react-icons/io';
import classNames from 'classnames';
import Dropdown from './Dropdown';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  console.log(isOpen);
  return (
    <>
      <header className={styles.wrapper}>
        <div className={styles.wrapper__container}>
          <div className={styles.wrapper__logo}>
            <img
              className={styles.wrapper__logo_svg}
              src='/assets/img/Logo.svg'
              alt='Logo Antonio Neto'
            />
            <h3 className={styles.wrapper__logo_title}>Antônio Neto</h3>
          </div>
          <IoIosMenu
            size='30px'
            color='#333'
            className={styles.wrapper__icon}
            onClick={handleClick}
          />
          <Dropdown active={isOpen} />
        </div>
      </header>
    </>
  );
}
