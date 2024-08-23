import { useState } from 'react';
import { create } from 'zustand';

/**
 * create()
 *
 * Zustand의 create() 함수는 상태 및 액션으로 스토어를 빠르게 정의할 수 있게 도와줍니다.
 * 스토어의 모든 컴포넌트에서 호출할 수 있는 커스텀 훅을 깔끔하게 패키징하는 것으로 생각하세요.
 * 컴포넌트에 바로 사용 가능한 독립적인 미니 스토어를 갖는 것과 같습니다.
 *
 * 장점
 * - 사용법이 간단합니다.
 * - 컨텍스트를 개별적으로 구성하지 않아도 됩니다.
 * - 로컬 상태를 쉽게 생성하고 사용할 수 있습니다.
 *
 * 단점
 * - 컨텍스트를 통과할 때 리액트의 훅 규칙을 위반할 가능성이 있습니다.
 * - 컨텍스트와 함께 사용하지 않는 것이 좋습니다.
 */

// eslint-disable-next-line react-refresh/only-export-components
export const useCounter = create((set /*, get */) => ({
  count: 0,
  increment: (by) => set((s) => ({ count: s.count + by })),
  // increment: (by) => {
  //   const prevCount = get().count;
  //   set(() => {
  //     return {
  //       count: prevCount + by,
  //     };
  //   });
  // },
}));

// --------------------------------------------------------------------------
// 사용 예시
// --------------------------------------------------------------------------

export default function Demo() {
  return (
    <div className="flex gap-2 my-5">
      <CountOutput />
      <CountControl />
    </div>
  );
}

function CountOutput() {
  const count = useCounter((s) => s.count);

  return <output className="text-accent text-3xl font-medium">{count}</output>;
}

function CountControl() {
  const increment = useCounter((s) => s.increment);
  const [by] = useState(() => Math.floor(Math.random() * 10));

  const handleIncrement = () => increment(by);

  return (
    <button type="button" className="euid-button" onClick={handleIncrement}>
      +{by}
    </button>
  );
}
