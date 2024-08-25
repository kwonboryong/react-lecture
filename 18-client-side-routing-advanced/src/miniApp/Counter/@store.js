// --------------------------------------------------------------------------
// ✅ Zustand 라이브러리를 사용해 상태 관리하기
// --------------------------------------------------------------------------
// - [x] 관리할 상태 : count, step, min, max, increment, decrement, reset
// - [x] 파생된 상태 : isMinDisabled, isMaxDisabled
// --------------------------------------------------------------------------
import { create } from 'zustand';

// 상태 저장소를 생성
export const useCountStore = create((set, get, store) => {
  // 증가 함수
  const increment = () => {
    // set = 상태를 업데이트
    set(({ count, step, max }) => {
      // 다음 값 = 현재값 + 증감값
      let nextCount = count + step;

      // 최댓값 제한 (다음 값이 최댓값에서 멈춤)
      if (nextCount >= max) nextCount = max;

      return { count: nextCount };
    });
  };

  // 감소 함수
  const decrement = () =>
    set(({ count, step, min }) => {
      // 다음 값 = 현재값 - 증감값
      let nextCount = count - step;

      // 최솟값 제한 (다음 값이 최솟값에서 멈춤)
      if (nextCount <= min) nextCount = min;

      return { count: nextCount };
    });

  // 리셋 함수
  // - store.getInitialState() = 초기 상태를 반환하는 메서드
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
