import React from 'react';
import Header from '../components/Header';

import styles from '../styles/Home.module.scss';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className={styles.container}>{children}</main>
    </>
  );
}
