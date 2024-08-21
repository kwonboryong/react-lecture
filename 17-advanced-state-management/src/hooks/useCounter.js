import { useCallback, useState } from 'react';

function useCounter({
  count: initialCount = 0,
  step = 1,
  min = 0,
  max = 100,
} = {}) {
  const [count, setCount] = useState(initialCount); // Memoized State (Immutable, Snapshot)

  const isMinDisabled = count <= min; // Boolean (Immutable)
  const isMaxDisabled = count >= max; // Boolean (Immutable)

  // Memoized function (Immutable)
  // useCallback() vs. useMemo()

  // useCallback() 훅 사용할 경우
  // 오직 함수 값만 기억
  const reset = useCallback(() => setCount(initialCount), [initialCount]);

  // Memoized function (Immutable)
  const increment = useCallback(
    () =>
      setCount((c) => {
        let nextCount = c + step;
        if (nextCount >= max) nextCount = max;
        return nextCount;
      }),
    [max, step]
  );

  // Memoized function (Immutable)
  const decrement = useCallback(
    () =>
      setCount((c) => {
        let nextCount = c - step;
        if (nextCount <= min) nextCount = min;
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
