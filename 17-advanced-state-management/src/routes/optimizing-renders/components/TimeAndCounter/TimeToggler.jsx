import { memo } from 'react';
import { func, node } from 'prop-types';
import S from './style.module.css';

TimeToggler.propTypes = {
  children: node.isRequired,
  onToggle: func,
};

function TimeToggler({ children, onToggle }) {
  return (
    <button type="button" className={S.button} onClick={onToggle}>
      {children}
    </button>
  );
}

export default memo(TimeToggler);
