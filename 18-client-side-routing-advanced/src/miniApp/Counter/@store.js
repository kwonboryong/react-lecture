// --------------------------------------------------------------------------
// ✅ Zustand 라이브러리를 사용해 상태 관리하기
// --------------------------------------------------------------------------
// - [x] 관리할 상태 : count, step, min, max, increment, decrement, reset
// - [x] 파생된 상태 : isMinDisabled, isMaxDisabled
// --------------------------------------------------------------------------

import { create } from 'zustand';

export const useCountStore = create((set, get, store) => {
  const increment = () => {
    set(({ count, step, max }) => {
      let nextCount = count + step;
      if (nextCount >= max) nextCount = max;
      return { count: nextCount };
    });
  };

  const decrement = () =>
    set(({ count, step, min }) => {
      let nextCount = count - step;
      if (nextCount <= min) nextCount = min;
      return { count: nextCount };
    });

  const reset = () => set(store.getInitialState());

  // 상태 값 반환
  return {
    count: 0,
    step: 1,
    min: 0,
    max: 10,
    increment,
    decrement,
    reset,
  };
});
