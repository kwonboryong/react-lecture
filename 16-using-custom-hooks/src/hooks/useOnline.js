import {
  useCallback,
  useDebugValue,
  useState,
  useSyncExternalStore,
} from 'react';
import useEventListener from './useEventListener';

function useOnline() {
  // isOnline 상태 선언
  const [isOnline, setIsOnline] = useState(() => navigator.onLine);

  // 리-렌더링 되더라도 처음에 기억한 함수를 동일 참조
  // 불필요한 리-렌더를 차단 (성능 최적화)
  const onOnline = useCallback(() => setIsOnline(true), []);
  const onOffline = useCallback(() => setIsOnline(false), []);

  // 커스텀 훅
  // 자동 이벤트 연결 및 해지
  useEventListener(globalThis, 'online', onOnline);
  useEventListener(globalThis, 'offline', onOffline);

  // 개발도구에서 표시되는 레이블 지정
  useDebugValue(isOnline, () => (isOnline ? '온라인' : '오프라인'));

  return isOnline;
}

/* -------------------------------------------------------------------------- */

// eslint-disable-next-line no-unused-vars
function useOnline_() {
  return useSyncExternalStore(subscribe, getSnapshot);
}

function subscribe(callback) {
  // 이벤트 구독
  globalThis.addEventListener('online', callback);
  globalThis.addEventListener('offline', callback);

  // 이벤트 해지
  return () => {
    globalThis.removeEventListener('online', callback);
    globalThis.removeEventListener('offline', callback);
  };
}

function getSnapshot() {
  return navigator.onLine;
}

export default useOnline;
