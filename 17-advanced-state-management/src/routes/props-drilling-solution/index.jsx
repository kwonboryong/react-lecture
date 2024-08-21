import { useMemo, useState } from 'react';
import useDocumentTitle from '@/hooks/useDocumentTitle';
import GrandParent from './components/GrandParent';
import { AppLink } from '@/components';
import { throttle } from '@/utils';
import S from './style.module.css';

// 페이지 컨텍스트 프로바이더 컴포넌트 불러오기
import { PageProvider } from './context';

function PropsDrillingSolution() {
  useDocumentTitle('프롭스 드릴링 이슈 해결책');

  const [message, setMessage] = useState('Props Drilling Issue');

  const handleChange = throttle((e) => setMessage(e.target.value), 100);

  const data = useMemo(() => ({ message, color: '#90deff' }), [message]);

  return (
    // 컨텍스트.프로바이더(공급자)를 통해 값(메모 필요) 전달하기
    <PageProvider value={data}>
      <main id="page" className={S.component}>
        <h1 className="headline">프롭스 드릴링 이슈 해결책</h1>

        <div className="description">
          <p>
            메시지 상태를 변경하면 깊숙히 자리잡은 컴포넌트에 데이터가
            전달됩니다.
          </p>
          <p style={{ marginBlockEnd: 16 }}>
            리액트{' '}
            <AppLink
              href="https://ko.react.dev/learn/passing-data-deeply-with-context"
              isExternal
            >
              Context <abbr title="Application Programming Interface">API</abbr>
            </AppLink>
            를 사용해 이 문제를 해결해봅니다.
          </p>
          <div>
            <label htmlFor="message" className="sr-only">
              변경할 메시지
            </label>
            <input
              type="text"
              id="message"
              className={S.input}
              defaultValue={message}
              onChange={handleChange}
            />
          </div>
        </div>

        <GrandParent data={data} />
      </main>
    </PageProvider>
  );
}

export default PropsDrillingSolution;
