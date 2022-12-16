import React from 'react';

import styles from '../styles/Container.module.scss';

export default function Container({ children, classKey }) {
  return <div className={styles[classKey]}>{children}</div>;
}
