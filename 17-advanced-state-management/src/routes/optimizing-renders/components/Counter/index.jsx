import { memo, useMemo } from 'react';
import { GrFormDown as Down, GrFormUp as Up } from 'react-icons/gr';
import useCounter from '@/hooks/useCounter';
import CountButton from './CountButton';
import CountOutput from './CountDisplay';
import S from './style.module.css';

// 컴포넌트 외부에서 기억? (훅 함수 사용 가능 ❌)
// React.memo(Component)
// const GrFormDown = memo(Down);
// const GrFormUp = memo(Up);

function Counter() {
  const C = useCounter({ min: -5, count: 3, step: 2 });
  const { count, step, isMinDisabled, isMaxDisabled, increment, decrement } = C;

  const increamentLabel = `${step} 증가`;
  const decreamentLabel = `${step} 감소`;

  // 컴포넌트 내부에서 기억? (훅 함수 사용 가능 ✅)
  // React.useMemo(() => 반환한 값을 기억, [])
  // React.useMemo(() => Component, [])

  const GrFormDown = useMemo(() => Down, []);
  const GrFormUp = useMemo(() => Up, []);

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
