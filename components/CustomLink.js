import React from 'react';
import Link from 'next/link';

import s from '../styles/Link.module.scss';

export default function CustomLink({ children, name, href }) {
  return (
    <Link href={href} className={s[name]}>
      {children}
    </Link>
  );
}
