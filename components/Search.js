import React from 'react';

import s from '../styles/Search.module.scss';

export default function Search() {
  return (
    <form className={s.container}>
      <input className={s.input} type='search' />
    </form>
  );
}
