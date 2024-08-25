import { memo } from 'react';
import { GrFormDown, GrFormUp } from 'react-icons/gr';
import useCounter from '@/hooks/useCounter';
import CountButton from './CountButton';
import CountOutput from './CountDisplay';
import S from './style.module.css';

function Counter() {
  // useCounter() 훅(커스텀 훅) -> 카운터 계산 로직
  const C = useCounter({ max: 10 });
  const { count, step, isMinDisabled, isMaxDisabled, increment, decrement } = C;

  // 버튼 텍스트(title, label)
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
          // 최댓값일 때 액션 제한
          onUpdate={increment}
        >
          {/* 버튼 아이콘 */}
          <GrFormUp />
        </CountButton>

        <CountButton
          title={decreamentLabel}
          aria-label={decreamentLabel}
          disabled={isMinDisabled}
          // 최솟값일 때 액션 제한
          onUpdate={decrement}
        >
          {/* 버튼 아이콘 */}
          <GrFormDown />
        </CountButton>
      </div>
    </div>
  );
}

export default memo(Counter);
