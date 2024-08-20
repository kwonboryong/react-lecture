// [목표]
// 특정 데이터가 웹 스토리지에 기억되도록 구현

// [목적]
// 개발 중 리프레시 상황에 부득이하게 데이터가 유실되는 경험
// 개발 중에 데이터 유실되지 않고 기억되도록 하는 데 목적

// [사용법]
// const [state, setState, methods: { getItem, setItem, deleteItem, allClear }] = useLocalStorage('@store/auth', initialValue);

import useStateWithCallback from './useStateWithCallback';

// [옵션] 관리 중인 상태가 변경되면 콜백 함수 실행
// useStateWithCallback

const { localStorage, sessionStorage } = globalThis;

// 웹 스토리지 데이터 읽기
const getStorageItem = (key, storageType = 'local') => {
  const storage = storageType.includes('local') ? localStorage : sessionStorage;
  const item = storage.getItem(key);
  const data = JSON.parse(item);
  return data ?? null;
};

// 웹 스토리지 데이터 쓰기
const setStorageItem = (key, value, storageType = 'local') => {
  const storage = storageType.includes('local') ? localStorage : sessionStorage;
  const stringifyValue = JSON.stringify(value);
  storage.setItem(key, stringifyValue);
};

// 웹 스토리지 데이터 삭제
const deleteStorageItem = (key, storageType = 'local') => {
  const storage = storageType.includes('local') ? localStorage : sessionStorage;
  if (!key) console.warn('삭제할 아이템의 키가 존재하지 않습니다.');
  else storage.removeItem(key);
};

// 웹 스토리지 데이터 모두 삭제
const allClearItems = (storageType = 'local') => {
  const storage = storageType.includes('local') ? localStorage : sessionStorage;
  storage.clear();
};

export function useLocalStorage(key, initialValue, autoSave = false) {
  const [state, setState] = useStateWithCallback(
    () => getStorageItem(key) ?? initialValue,
    (nextState) => autoSave && setItem(nextState)
  );

  const getItem = () => getStorageItem(key);
  const setItem = (newValue) => setStorageItem(key, newValue);
  const deleteItem = () => deleteStorageItem(key);
  const allClear = () => allClearItems();

  return [
    state,
    setState,
    /* methods */ {
      getItem,
      setItem,
      deleteItem,
      allClear,
    },
  ];
}

export function useSessionStorage(key, initialValue, autoSave = false) {
  const [state, setState] = useStateWithCallback(
    () => getStorageItem(key) ?? initialValue,
    (nextState) => autoSave && setItem(nextState)
  );

  const getItem = () => getStorageItem(key, 'session');
  const setItem = (newValue) => setStorageItem(key, newValue, 'session');
  const deleteItem = () => deleteStorageItem(key, 'session');
  const allClear = () => allClearItems('session');

  return [
    state,
    setState,
    {
      getItem,
      setItem,
      deleteItem,
      allClear,
    },
  ];
}

export default {
  useLocalStorage,
  useSessionStorage,
};
