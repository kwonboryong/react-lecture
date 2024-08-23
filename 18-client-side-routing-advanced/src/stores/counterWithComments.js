import { create } from 'zustand';

// Zustand로 상태 관리 (Zustand <- Redux 계승 / Jotai <- Recoil (atom))
// - [React Project] create() 스토어를 관리하는 훅 함수 생성
// - [Vanilla Project] createStore() 스토어를 관리하는 객체를 생성

const INITIAL_VALUE = 0;

// 상태를 생성하는 함수
const stateCreator = (
  /* 상태 업데이트 기능 */
  set,
  /* 상태 가져오는 기능 */
  get
) => {
  // 액션(함수)

  // 증가 기능
  const increment = (by = 1) => {
    // 이전 카운트 값 가져오기
    const prevCount = get().count;

    // 다음 카운트 값 계산하기
    const nextCount = prevCount + by;

    // 다음 카운트 값 상태 업데이트 하기
    set({ count: nextCount });
  };

  // 감소 기능
  const decrement = (by = 1) => {
    const prevCount = get().count;
    const nextCount = prevCount - by;
    set({ count: nextCount });
  };

  // 초기화 기능
  const reset = () => {
    set({ count: INITIAL_VALUE });
  };

  // 관리 상태(객체)
  return {
    count: INITIAL_VALUE,
    increment,
    decrement,
    reset,
  };
};

// 카운터 상태를 관리하는 훅 함수 이름 작성
export const useCounter = create(stateCreator);
