import S from './style.module.css';
import useClock from '@/hooks/useClock';
import TimeToggler from './TimeToggler';
import Counter from '../Counter';

// TimeToggler 함수 참조
// 컴포넌트를 기억하자!
// 기억된 컴포넌트 = React.memo(컴포넌트참조)
// 캐싱된(기억된) 컴포넌트는 속성이 변경되지 않는한 다시 렌더링 되지 않는다.
// const MemoizedTimeToggler = React.memo(TimeToggler);

function TimeAndCounter() {
  const { time, turnOn, onOff } = useClock();

  // 변경 됨 (기억할 필요가 있다.)
  // 함수 타입을 기억하고 싶다.
  // 기억된 함수 값은 더 이상 변경되지 않는다.
  const handleToggleTime = () => onOff((c) => !c);
  // const handleToggleTime = useCallback(() => onOff((c) => !c), [onOff]);

  // 불변
  const label = `타임 ${turnOn ? '스톱' : '플레이'}`;

  return (
    <div className={S.component}>
      <div role="group" className={S.group}>
        <time>{time}</time>
        <TimeToggler onToggle={handleToggleTime}>{label}</TimeToggler>
      </div>
      <Counter />
    </div>
  );
}

export default TimeAndCounter;
