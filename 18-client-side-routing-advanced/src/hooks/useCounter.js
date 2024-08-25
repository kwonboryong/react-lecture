import { useCallback, useState } from 'react';

// 카운터 계산 로직
function useCounter({
  // 매개변수 = 초기값, 증감값, 최솟값, 최댓값
  count: initialCount = 0,
  step = 1,
  min = 0,
  max = 100,
} = {}) {
  // 현재 값, 카운트 업데이트 함수
  const [count, setCount] = useState(initialCount);

  // 현재 카운트가 최소값 이하일 때 true
  const isMinDisabled = count <= min;
  // 현재 카운트가 최대값 이상일 때 true
  const isMaxDisabled = count >= max;

  // 리셋 함수 = 카운트를 초기값으로 재설정
  // - initialCount가 변경될 때만 새로 정의
  const reset = useCallback(() => {
    setCount(initialCount);
  }, [initialCount]);

  
  // 증가 함수
  const increment = useCallback(
    () =>
      setCount((c) => {
        // 다음 값 = 현재값 + 증감값
        let nextCount = c + step;

        // 최댓값 제한 (다음 값이 최댓값에서 멈춤)
        if (nextCount >= max) {
          nextCount = max;
        }

        return nextCount;
      }),
    [max, step]
  );

  // 감소 함수
  const decrement = useCallback(
    () =>
      setCount((c) => {
        // 다음 값 = 현재값 - 증감값
        let nextCount = c - step;

        // 최솟값 제한 (다음 값이 최솟값에서 멈춤)
        if (nextCount <= min) {
          nextCount = min;
        }

        return nextCount;
      }),
    [min, step]
  );


  return {
    count,
    step,
    isMinDisabled,
    isMaxDisabled,
    increment,
    decrement,
    reset,
  };
}

export default useCounter;
