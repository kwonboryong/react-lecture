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
  useDocumentTitle('사용자 로그인');

  const navigate = useNavigate();
  const { setAuth } = useAuth();

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData(e.currentTarget);

      const email = formData.get('email');
      const password = formData.get('password');

      const authData = await userSignIn(email, password);

      // 요청에 따른 응답 검토
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

  const [formState, setFormState] = useImmer({
    email: '',
    password: '',
  });

  const handleEmailInput = (value) => {
    setFormState((draft) => {
      draft.email = value;
    });
  };

  const handlePasswordInput = (value) => {
    setFormState((draft) => {
      draft.password = value;
    });
  };

  // 파생된 상태 변수
  const { email, password } = formState;
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
