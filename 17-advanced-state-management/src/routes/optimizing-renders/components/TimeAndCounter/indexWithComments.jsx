import { useEffect, useRef } from 'react';
import S from './style.module.css';
import useClock from '@/hooks/useClock';
import TimeToggler from './TimeToggler';
import Counter from '../Counter';

// 컴포넌트(함수)가 다시 렌더링(실행) 되는 이유
// 1. 컴포넌트 자신이 소유한 상태(states)가 변경될 때
// 2. 컴포넌트 외부에서 전달된 속성(props)이 변경될 때
function TimeAndCounter() {
  const { time, turnOn, onOff } = useClock();

  // 현재(1) 시점의 지역 변수와 함수를 기억한다.
  // 다음 렌더링에서 과거(이전의 현재)의 지역 변수와 함수를
  // 현재(2) 시점의 지역 변수와 함수를 이전 시점의 지역 변수와 함수 값이 같은 지 다른 지 비교한다.
  const memoryRef = useRef({
    handleToggleTime: null,
    label: null,
  });

  // [가설 검증]
  // memoryRef = RefObject { current: { handleToggleTime, label } }
  // useEffect 훅을 사용하면 렌더링 이후 시점 뭔가를 수행하고 싶다.
  useEffect(() => {
    // 이전 기억된 값과 현재 값을 비교 한다.
    if (Object.is(label, memoryRef.current.label)) {
      console.log(
        '현재 렌더링 시점의 label 값은 이전 시점의 기억된 label과 동일하다.'
      );
    } else {
      console.log(
        '현재 렌더링 시점의 label 값은 이전 시점의 기억된 label과 다르다.'
      );
    }

    if (Object.is(handleToggleTime, memoryRef.current.handleToggleTime)) {
      console.log(
        '현재 렌더링 시점의 handleToggleTime 함수 값은 이전 시점의 기억된 handleToggleTime 함수 값과 동일하다.'
      );
    } else {
      console.log(
        '현재 렌더링 시점의 handleToggleTime 함수 값은 이전 시점의 기억된 handleToggleTime 함수 값과 다르다.'
      );
    }

    // 현재 값을 기억 한다. (다음 렌더링 시, 이전 기억이 됨)
    memoryRef.current = {
      label,
      handleToggleTime,
    };
  });

  // memoryRef.current 객체에 현재 함수 실행된 영역의 변수 또는 함수를 기억하려고
  // 그래야 다음 번 리-렌더링 시 생성된 변수, 함수와 비교가 가능하니까.

  // JavaScript 환경에서 함수 내부에 선언된 지역 함수 또는 변수는
  // 다시 함수가 실행되면 이전의 변수, 함수가 아니라 새롭게 정의된다.
  const handleToggleTime = () => onOff((c) => !c);

  const label = `타임 ${turnOn ? '스톱' : '플레이'}`;

  // 그 자체가 값이므로 "불변 데이터"이다.
  // '타임 스톱' or '타임 플레이'

  // 컴포넌트에 전달되는 속성 값이 바뀌지 않으면
  // 컴포넌트는 다시 렌더링되지 않는다.
  // 함수가 다시 실행되지 않는다.

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
