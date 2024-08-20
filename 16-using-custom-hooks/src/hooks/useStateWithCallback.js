import { useEffect, useState } from 'react';

/** @type {(initialValue: any, callback?: (nextState: any) => void) => [state, setState]} */
function useStateWithCallback(initialValue, callback) {
  // 상태 선언
  const [state, setState] = useState(initialValue);

  // 상태를 추적하는 이펙트 추가
  useEffect(() => {
    // const nextState = state;

    // 나는 callback은 반응성 상태가 아니라는 것을 알고 있다.
    // 즉, callback이 변경된다고 해서 이펙트 함수가 다시 실행되어서는 안된다.
    callback?.(state);

    // 이 문제가 고질적이므로 React 팀은 v19부터 useEffectEvent() 훅을 제공한다.
    // useEffectEvent() 훅을 사용하면 callback을 반응하지 않는 일반 이벤트 핸들러 함수로
    // 취급할 수 있어 ESLint 훅 검사 규칙에 위반하지 않게 된다.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  // 반환 값
  return [state, setState];
}

export default useStateWithCallback;
