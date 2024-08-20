// import { useEffect, useState } from "react";
import useStateWithCallback from './useStateWithCallback';

// 1. 직접 구현
/** @type {(initialValue?: boolean, callback?: (nextState) => void) => [isToggle, setIsToggle]} */
// eslint-disable-next-line no-unused-vars
function _useToggle(initialValue = false, callback) {
  // 리액트에서 상태를 관리한다? useState()
  // const [isToggle, setIsToggle] = useState(initialValue);
  // 리액트에서 상태가 변경될 때 뭔가를 수행한다? useEffect()
  // useEffect(() => {
  //   callback?.(isToggle);
  // }, [isToggle]);
  // 상태 및 상태 업데이트 함수를 반환한다.
  // 왜? 외부에서 사용해야 하니까!
  // return [isToggle, setIsToggle];
}

// 2. useStateWithCallback() 커스텀 훅 활용
/** @type {(initialValue?: boolean, callback?: (nextState) => void) => [isToggle, setIsToggle]} */
function useToggle(initialValue = false, callback) {
  return useStateWithCallback(initialValue, callback);
}

export default useToggle;
