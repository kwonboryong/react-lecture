import { Link, useNavigate } from 'react-router-dom';
import { VscVscodeInsiders } from 'react-icons/vsc';
import useDocumentTitle from '@/hooks/useDocumentTitle';
import { AppButton, AppForm, AppInput } from '@/components';
import S from './style.module.css';
import { userSignIn } from '@/api/user';
import { useImmer } from 'use-immer';
import { AUTH_KEY, useAuth } from '@/contexts/auth';
import { setStorageData } from '@/utils';

function SignInUser() {
  // 페이지 제목 설정
  useDocumentTitle('사용자 로그인');

  // 페이지 이동을 위한 navigate 함수
  const navigate = useNavigate();

  // 인증 컨텍스트에서 setAuth를 가져옴
  const { setAuth } = useAuth();


  // 로그인 폼 제출 시 실행될 함수
  const handleSignIn = async (e) => {
    e.preventDefault(); // 폼의 기본 제출 동작을 막음

    try {
      // 폼 데이터 추출(이메일, 비번)
      const formData = new FormData(e.currentTarget);

      const email = formData.get('email');
      const password = formData.get('password');

      // 사용자 로그인 함수(user.js) 호출 & 로그인
      const authData = await userSignIn(email, password);

      // 요청에 따른 응답 검토
      // - 받은 사용자 정보와 토큰을 추출
      const { record: user, token } = authData;
      const authInfo = { user, token };

      // 인증 컨텍스트에 사용자 정보 저장
      setAuth(authInfo);

      // 로컬 스토리지에 사용자 정보 저장
      setStorageData(AUTH_KEY, authInfo);

      // 홈페이지로 이동
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  // useImmer를 사용하여 formState 상태를 초기화
  const [formState, setFormState] = useImmer({
    email: '',
    password: '',
  });

  // 이메일 입력 핸들러
  const handleEmailInput = (value) => {
    setFormState((draft) => {
      draft.email = value;
    });
  };

  // 비밀번호 입력 핸들러
  const handlePasswordInput = (value) => {
    setFormState((draft) => {
      draft.password = value;
    });
  };

  // formState에서 email과 password를 추출
  const { email, password } = formState;

  // 입력값 유효성 검사를 위해 isDisable 설정
  const isDisable = email.trim().length === 0 || password.trim().length === 0;

  return (
    <main id="page" className={S.component}>
      <h1 className="headline">사용자 로그인</h1>

      <div className="description">
        <p>사용자가 서비스에 로그인 하기 위한 폼의 기능을 구현합니다.</p>
        <p>
          <a
            href="https://pocketbase.io"
            rel="noreferrer noopener"
            target="_blank"
          >
            PocketBase
          </a>{' '}
          백엔드 솔루션 인증 시스템을 사용해 로그인 하세요.
        </p>
      </div>

      <AppForm onSubmit={handleSignIn}>
        <AppInput
          name="email"
          email
          label="이메일"
          placeholder="yamoo9@naver.com"
          onInput={handleEmailInput}
        />
        <AppInput
          name="password"
          password
          label="패스워드"
          placeholder="영어,숫자 조합 6자리 이상"
          onInput={handlePasswordInput}
        />
        <AppButton submit disabled={isDisable} icon={<VscVscodeInsiders />}>
          로그인
        </AppButton>
      </AppForm>

      <div className="description" style={{ marginBlockStart: 8 }}>
        <p style={{ inlineSize: '100%', textAlign: 'center' }}>
          <Link to="/signup-user">회원가입</Link> 페이지로 이동
        </p>
      </div>
    </main>
  );
}

export default SignInUser;
