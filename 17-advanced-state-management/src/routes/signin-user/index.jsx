import { Link } from 'react-router-dom';
import { VscVscodeInsiders } from 'react-icons/vsc';
import useDocumentTitle from '@/hooks/useDocumentTitle';
import { AppButton, AppForm, AppInput } from '@/components';
import S from './style.module.css';
import { userSignIn } from '@/api/user';

function SignInUser() {
  useDocumentTitle('사용자 로그인');

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData(e.currentTarget);

      const email = formData.get('email');
      const password = formData.get('password');

      const authData = await userSignIn(email, password);

      console.log(authData);
    } catch (error) {
      console.error(error);
    }
  };

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
        />
        <AppInput
          name="password"
          password
          label="패스워드"
          placeholder="영어,숫자 조합 6자리 이상"
        />
        <AppButton submit icon={<VscVscodeInsiders />}>
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
