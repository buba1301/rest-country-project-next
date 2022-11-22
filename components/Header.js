import React, { useState } from 'react';
import Moon from '../public/moon-outline.svg';
import useTheme from '../hooks/useTheme';

import s from '../styles/Header.module.scss';

const themes = {
  dark: {
    backgroundElements: 'hsl(209, 23%, 22%)',
    background: 'hsl(207, 26%, 17%)',
    color: 'hsl(0, 0%, 100%)',
  },
  light: {
    backgroundElements: 'hsl(0, 0%, 100%)',
    background: 'hsl(0, 0%, 98%)',
    color: 'hsl(200, 15%, 8%)',
  },
};

export default function Header() {
  const [theme, setTheme] = useState('dark');

  useTheme(themes[theme]);

  const handleClick = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className={s.container}>
      <h1 className={s.header}>Where in the world?</h1>
      <button className={s.button} onClick={handleClick}>
        {theme === 'dark' ? 'Light mode' : 'Dark mode'}
      </button>
    </div>
  );
}
