import { useRef, useEffect } from 'react';
import { animate, spring } from 'motion';
import { bool, func } from 'prop-types';
import S from './Switcher.module.css';

const springAnimation = spring({ stiffness: 500, damping: 40 });

Switcher.propTypes = {
  value: bool,
  onToggle: func,
};

function Switcher({ value = false, onToggle, ...restProps }) {
  const ballRef = useRef(null);

  useEffect(() => {
    const el = ballRef.current;

    if (value) {
      animate(el, { x: 50 }, { easing: springAnimation });
    } else {
      animate(el, { x: 0 }, { easing: springAnimation });
    }
  }, [value]);

  const handleToggle = () => onToggle?.(!value);

  const classNames = `${S.component} ${value ? S.dark : ''}`.trim();

  return (
    <div className={classNames}>
      <button
        role="switch"
        type="button"
        aria-checked={value}
        className={S.button}
        onClick={handleToggle}
        {...restProps}
      >
        <span className={S.ball} ref={ballRef} />
      </button>
    </div>
  );
}

export default Switcher;
