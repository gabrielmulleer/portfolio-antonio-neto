import { useState } from 'react';
import styles from './Dropdown.module.scss';
import Links from './Links';
import classNames from 'classnames';

export default function Dropdown({ active }) {
  return (
    <nav
      className={classNames({
        [styles.menu]: true,
        [styles[`menu--open`]]: active == true,
      })}
    >
      <Links>Home</Links>
      <Links>About</Links>
      <Links>Resume</Links>
    </nav>
  );
}
