import { Link } from 'react-router-dom';
import { VscOctoface } from 'react-icons/vsc';
import useDocumentTitle from '@/hooks/useDocumentTitle';
import { AppButton, AppForm, AppInput } from '@/components';
import S from './style.module.css';

function SignUpUser() {
  useDocumentTitle('사용자 회원가입');

  return (
    <main id="page" className={S.component}>
      <h1 className="headline">사용자 회원가입</h1>

      <div className="description">
        <p>사용자가 서비스에 회원가입 하기 위한 폼의 기능을 구현합니다.</p>
        <p>
          <a
            href="https://pocketbase.io"
            rel="noreferrer noopener"
            target="_blank"
          >
            PocketBase
          </a>{' '}
          백엔드 솔루션 인증 시스템을 사용해 회원가입 하세요.
        </p>
      </div>

      <AppForm>
        <AppInput email label="이메일" placeholder="yamoo9@naver.com" />
        <AppInput
          password
          label="패스워드"
          placeholder="영어,숫자 조합 6자리 이상"
        />
        <AppInput
          password
          label="패스워드 확인"
          placeholder="입력한 패스워드와 동일한 값"
        />
        <AppButton submit disabled icon={<VscOctoface />}>
          회원가입
        </AppButton>
      </AppForm>

      <div className="description" style={{ marginBlockStart: 8 }}>
        <p style={{ inlineSize: '100%', textAlign: 'center' }}>
          <Link to="/signin-user">로그인</Link> 페이지로 이동
        </p>
      </div>
    </main>
  );
}

export default SignUpUser;
