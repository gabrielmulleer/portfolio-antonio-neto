import { useEffect, useState } from 'react';
import styles from './Header.module.scss';
import { IoIosMenu } from 'react-icons/io';
import classNames from 'classnames';
import Dropdown from './Menu/Dropdown';
import Menu from './Menu';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth >= 768);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth >= 768);
      setIsOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  console.log(width);
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
          {width || <Dropdown active={isOpen} />}
          {!width || <Menu />}
        </div>
        <span
          className={classNames({
            [styles.overlay]: true,
            [styles[`overlay--active`]]: isOpen == true,
          })}
        ></span>
      </header>
    </>
  );
}
