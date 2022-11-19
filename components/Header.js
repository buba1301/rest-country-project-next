import React from 'react';
import Moon from '../public/moon-outline.svg';

import s from '../styles/Header.module.scss';

export default function Header() {
  return (
    <div className={s.container}>
      <h1 className={s.header}>Where in the world?</h1>
      <button className={s.button}>Dark Mode</button>
    </div>
  );
}
