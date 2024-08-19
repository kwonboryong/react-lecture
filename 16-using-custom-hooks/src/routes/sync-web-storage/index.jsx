import { useEffect, useState } from 'react';
import useDocumentTitle from '@/hooks/useDocumentTitle';
import { getStorageData, setStorageData } from '@/utils';
import Switcher from './components/Switcher';
import S from './style.module.css';

const DARK_MODE_KEY = '@theme/dark';

function SyncWebStorage() {
  useDocumentTitle('웹 스토리지 동기화');

  const [isDarkMode, setIsDarkMode] = useState(() =>
    getStorageData(DARK_MODE_KEY, false)
  );

  useEffect(() => {}, [isDarkMode]);

  const handleSaveDarkMode = () => {
    setStorageData(DARK_MODE_KEY, isDarkMode);
  };

  const handleToggleDarkMode = (nextIsDarkMode) => {
    setIsDarkMode(nextIsDarkMode);
  };

  return (
    <main id="page">
      <h1 className="headline">웹 스토리지 동기화</h1>

      <div className="description">
        <p>이팩트를 사용해 브라우저 스토리지(Storage)와 동기화합니다.</p>
        <p>
          스토리지 데이터를 읽기/쓰기하는 것은 리액트의 렌더링 프로세스와
          관련없습니다.
        </p>
        <p>이펙트를 사용해 스토리지 데이터를 리액트 앱과 동기화 해봅니다.</p>

        <button
          type="button"
          className={S.button}
          onClick={handleSaveDarkMode}
          style={{ marginBlockStart: 8 }}
        >
          테마 저장
        </button>
      </div>

      <Switcher value={isDarkMode} onToggle={handleToggleDarkMode} />
    </main>
  );
}

export default SyncWebStorage;
