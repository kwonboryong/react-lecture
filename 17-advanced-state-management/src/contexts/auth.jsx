import {
  createContext,
  useMemo,
  useReducer,
  useCallback,
  useContext,
} from 'react';
import authReducer, {
  INITIAL_AUTH_INFO,
  resetAuth,
  setAuth,
} from '@/stores/auth';
import { getStorageData } from '@/utils';

export const AUTH_KEY = '@auth';

// 인증 (Authentication) / 권한 (Authorization)
// - 인증 정보를 저장하고 제공할 Context를 생성
// - 이 컨텍스트를 통해 다른 컴포넌트에서 인증 상태에 접근할 수 있다.
const authContext = createContext();

// 인증 컨텍스트를 제공하는 컴포넌트
// - 최상위 레벨에 이 컴포넌트를 두면 하위 컴포넌트들이 인증 상태에 접근할 수 있다.
export const AuthProvider = (props) => {
  // 참고: https://ko.react.dev/reference/react/useReducer#usereducer
  // 인증 상태(authState)와 디스패치 함수(dispatch)를 관리
  const [authState, dispatch] = useReducer(authReducer, INITIAL_AUTH_INFO, () =>
    getStorageData(AUTH_KEY)
  );

  const handleSetAuth = useCallback(
    (authInfo) => dispatch(setAuth(authInfo)),
    []
  );

  const handleResetAuth = useCallback(() => dispatch(resetAuth()), []);

  return (
    <authContext.Provider
      value={{
        authInfo: useMemo(() => authState, [authState]),
        setAuth: handleSetAuth,
        resetAuth: handleResetAuth,
      }}
      {...props}
    />
  );
};

export const useAuth = () => {
  const authContextValue = useContext(authContext);

  if (!authContextValue) {
    throw new Error('useAuth() 훅은 Auth Context 내부에서만 사용 가능합니다.');
  }

  return authContextValue;
};
