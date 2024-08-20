import { useState } from 'react';

function useCounter({
  count: initialCount = 0,
  min = 0,
  max = 100,
  step = 1,
} = {}) {
  // 상태 / 업데이트 함수
  const [count, setCount] = useState(initialCount);

  // 파생된 상태
  const isMinDisabled = count <= min;
  const isMaxDisabled = count >= max;

  // 기능
  const increment = () => {
    let nextCount = count + step;
    if (nextCount >= max) nextCount = max;
    setCount(nextCount);
  };

  const decrement = () => {
    let nextCount = count - step;
    if (nextCount <= min) nextCount = min;
    setCount(nextCount);
  };

  const reset = () => {
    setCount(initialCount);
  };

  // 반환 값
  return {
    count,
    step,
    min,
    max,
    isMinDisabled,
    isMaxDisabled,
    increment,
    decrement,
    reset,
  };
}

export default useCounter;
