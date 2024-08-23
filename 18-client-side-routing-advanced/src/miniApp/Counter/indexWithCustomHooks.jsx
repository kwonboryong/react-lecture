import { memo } from 'react';
import { GrFormDown, GrFormUp } from 'react-icons/gr';
import useCounter from '@/hooks/useCounter';
import CountButton from './CountButton';
import CountOutput from './CountDisplay';
import S from './style.module.css';

function Counter() {
  const C = useCounter();
  const { count, step, isMinDisabled, isMaxDisabled, increment, decrement } = C;

  const increamentLabel = `${step} 증가`;
  const decreamentLabel = `${step} 감소`;

  return (
    <div className={S.component}>
      <CountOutput count={count} />
      <div role="group" className={S.group}>
        <CountButton
          title={increamentLabel}
          aria-label={increamentLabel}
          disabled={isMaxDisabled}
          onUpdate={increment}
        >
          <GrFormUp />
        </CountButton>
        <CountButton
          title={decreamentLabel}
          aria-label={decreamentLabel}
          disabled={isMinDisabled}
          onUpdate={decrement}
        >
          <GrFormDown />
        </CountButton>
      </div>
    </div>
  );
}

export default memo(Counter);
