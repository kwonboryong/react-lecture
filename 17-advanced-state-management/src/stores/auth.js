/* 사용자 인증 상태를 관리하기 위해 설계된 상태 관리 시스템 */

// 초기 인증 상태를 나타내는 객체
// - 사용자가 로그인하지 않은 초기 상태
export const INITIAL_AUTH_INFO = {
  user: null,
  token: null,
};

// 인증 상태를 변경하기 위해 사용할 액션 타입을 정의
const ACTION_TYPES = {
  SET: '@auth/set', // 인증 정보를 설정
  RESET: '@auth/reset', // 인증 정보를 초기 상태로 재설정
};

// 인증 정보를 설정하는 액션을 생성
export const setAuth = (authInfo) => ({
  type: ACTION_TYPES.SET, // SET 액션 생성
  payload: authInfo,
  // authInfo(사용자 정보와 토큰)을 받아와서 액션 객체의 payload로 설정
});

// 인증 정보를 초기화하는 액션을 생성
export const resetAuth = () => ({
  type: ACTION_TYPES.RESET, // RESET 액션 생성
});


// 인증 리듀서
// - 현재 상태와 액션을 받아 새로운 상태를 반환하는 함수
// - 상태 관리를 위해 useReducer 훅이나 전역 상태 관리 라이브러리 (예: Redux)에서 사용할 수 있다.
const authReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET: {
      const authInfo = action.payload;
      // 액션의 payload에서 전달된 authInfo를 사용하여 현재 상태를 업데이트

      return { ...state, ...authInfo };
      // 기존 상태 state에 새로운 인증 정보 authInfo를 덮어씌워서 반환
    }

    case ACTION_TYPES.RESET: {
      return INITIAL_AUTH_INFO;
      // 상태를 초기 상태 (INITIAL_AUTH_INFO)로 재설정
    }

    default:
      return state;
      // 정의되지 않은 액션 타입이 들어오면 현재 상태를 그대로 반환
  }
};

export default authReducer;
