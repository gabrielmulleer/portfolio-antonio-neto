import React from 'react';
import { IoIosMenu } from 'react-icons/io';
export default function Header() {
  return (
    <div>
      <div>
        <img src='/assets/img/Logo.svg' alt='Logo Antonio Neto' />
        <h3>Antônio Neto</h3>
      </div>
      <IoIosMenu />
    </div>
  );
}
