import authReducer, { signInAction, signOutAction } from '@/stores/auth';
import { useReducer } from 'react';

function AuthStatus() {
  const [authUser, dispatch] = useReducer(authReducer, null);

  const signIn = () => {
    dispatch(
      signInAction({
        name: '야무',
        email: 'yamoo9@naver.com',
      })
    );
  };

  const signOut = () => {
    dispatch(signOutAction());
  };

  return (
    <div>
      <h2 className="headline2">인증 정보</h2>
      {authUser ? (
        <>
          <p>
            {authUser.name} ({authUser.email})
          </p>
          <button type="button" onClick={signOut}>
            로그아웃
          </button>
        </>
      ) : (
        <>
          <p>인증된 사용자가 없습니다.</p>
          <button type="button" onClick={signIn}>
            로그인
          </button>
        </>
      )}
    </div>
  );
}

export default AuthStatus;
