import { memo, useMemo } from 'react';
import { GrFormDown, GrFormUp } from 'react-icons/gr';
import CountButton from './CountButton';
import CountOutput from './CountDisplay';
import S from './style.module.css';
import { useCountStore } from './@store';

// --------------------------------------------------------------------------

function Counter() {
  const [count, step, min, max] = useCountStore((s) => [
    s.count,
    s.step,
    s.min,
    s.max,
  ]);

  const increamentLabel = `${step} 증가`;
  const decreamentLabel = `${step} 감소`;

  const isMinDisabled = count <= min;
  const isMaxDisabled = count >= max;

  return (
    <div className={S.component}>
      <CountOutput />
      <div role="group" className={S.group}>
        <CountButton
          title={increamentLabel}
          aria-label={increamentLabel}
          disabled={isMaxDisabled}
        >
          {useMemo(() => <GrFormUp />, [])}
        </CountButton>
        <CountButton
          type="-"
          title={decreamentLabel}
          aria-label={decreamentLabel}
          disabled={isMinDisabled}
        >
          {useMemo(() => <GrFormDown />, [])}
        </CountButton>
      </div>
    </div>
  );
}

export default memo(Counter);
