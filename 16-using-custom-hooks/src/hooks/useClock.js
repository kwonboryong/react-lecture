import { useDebugValue, useEffect, useState } from 'react';

function useClock() {
  // 타임 상태 선언
  const [time, setTime] = useState(new Date());

  // 타임 업데이트 이펙트
  useEffect(() => {
    const clearId = setInterval(() => {
      const nextTime = new Date();
      setTime(nextTime);
    }, 1000);

    return () => {
      clearInterval(clearId);
    };
  }, []);

  // 리액트 개발 도구 포멧 표시 설정
  useDebugValue(time, () => time.toLocaleTimeString());

  // 상태 값 반환
  return time;
}

export default useClock;
