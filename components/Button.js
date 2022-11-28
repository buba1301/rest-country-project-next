import cn from 'classnames';

import s from '../styles/Buttom.module.scss';

export default function Button({ text, size, disabled, onClick }) {
  const className = cn({
    [s.xlBtn]: size === 'xl',
  });
  return (
    <button
      type='button'
      className={className}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
