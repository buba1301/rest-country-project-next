import cn from 'classnames';

import s from '../../styles/Buttom.module.scss';

export default function Button({ text, size, onClick, children }) {
  const className = cn({
    [s.xlBtn]: size === 'xl',
  });
  return (
    <button type="button" className={className} onClick={onClick}>
      {text}
      {children}
    </button>
  );
}
