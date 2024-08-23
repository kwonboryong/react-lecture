import { createContext, useContext, useRef, useState } from 'react';
import { createStore, useStore } from 'zustand';

/**
 * createStore
 *
 * 커스텀 훅 대신, 스토어 객체를 사용해 상태를 공유하는 방법입니다.
 * 컨텍스트나 컴포넌트 속성(props)을 통해 스토어를 전달하고 싶을 때 이상적입니다.
 *
 * 장점
 * - 리액트의 컨텍스트에 친화적입니다. (여러 컴포넌트 간 스토어 공유에 적합)
 * - 훅 함수 사용 규칙 위반을 방지합니다. 훅 대신 스토어 객체를 전달합니다.
 *
 * 단점
 * - 다소 복잡하고, 컨텍스트 설정이 함께 필요합니다.
 */

const counterStore = createStore((set) => ({
  count: 0,
  increment: (by) => set((s) => ({ count: s.count + by })),
}));

const counterContext = createContext(null);

export function CounterProvider(props) {
  const storeRef = useRef(counterStore); // { current: store { count, increment } }
  return <counterContext.Provider value={storeRef.current} {...props} />;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useCounterStore() {
  const store = useContext(counterContext);

  if (!store) {
    throw new Error(
      'useCounterStore() 훅은 CounterProvider 내부에서만 사용 가능합니다.'
    );
  }

  return store;
}

// --------------------------------------------------------------------------
// 사용 예시
// --------------------------------------------------------------------------

export default function Demo() {
  return (
    <CounterProvider>
      <div className="flex gap-2 my-5">
        <CountOutput />
        <CountControl />
      </div>
    </CounterProvider>
  );
}

function CountOutput() {
  const store = useCounterStore();
  const count = useStore(store, (s) => s.count);

  return <output className="text-accent text-3xl font-medium">{count}</output>;
}

function CountControl() {
  const increment = useStore(useCounterStore(), (s) => s.increment);

  const [by] = useState(() => Math.floor(Math.random() * 10));

  const handleIncrement = () => {
    increment(by);
  };

  return (
    <button type="button" className="euid-button" onClick={handleIncrement}>
      +{by}
    </button>
  );
}
