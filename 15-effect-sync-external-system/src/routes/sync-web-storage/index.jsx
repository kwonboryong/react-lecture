// --------------------------------------------------------------------------
// ✅ 웹 스토리지 동기화
// --------------------------------------------------------------------------
// - [x] 스위치가 ON일 경우, 다크 모드로 전환되도록 설정합니다.
// - [x] 웹 페이지를 새로고침 하더라도 상태가 유지되도록 설정합니다.
// --------------------------------------------------------------------------
import { useEffect, useState } from 'react';
import Switcher from './components/Switcher';
import S from './style.module.css';
import { getStorageData, setStorageData } from '@/utils';

const DARK_MODE_KEY = '@theme/dark';

function SyncWebStorage() {
  
  // 다크 모드 스위치 상태 관리 선언

  // 좋지 않은 코드
  // const [isDarkMode, setIsDarkMode] = useState(() => JSON.parse(localStorage.getItem(DARK_MODE_KEY)));
  
  // 좋은 코드
  const [isDarkMode, setIsDarkMode] = useState(
    // 초기화 함수를 사용하는 이유
    // - 해당 코드는 렌더링 프로세스와 관련 없기 때문에 초기화 때 한 번 실행하기 위해
    () => getStorageData(DARK_MODE_KEY, false)
  );


  // isDarkMode 반응성 데이터가 변경될 때마다 변경된 반응성 데이터를 브라우저 스토리지에 유지
  useEffect(() => {
    // setStorageData(DARK_MODE_KEY, isDarkMode);
    // = localStorage.setItem(DARK_MODE_KEY, JSON.stringify(isDarkMode));
    // 웹 스토리지에 데이터를 저장할 땐 [ String ] 포멧으로 저장
  }, [isDarkMode]);


  // 테마 저장 이벤트 핸들러(반영구적)
  const handleSaveDarkMode = () => {
    setStorageData(DARK_MODE_KEY, isDarkMode);
    // = localStorage.setItem(DARK_MODE_KEY, JSON.stringify(isDarkMode));
  };

  // 테마 전환 이벤트 핸들러(휘발성)
  // - 리액트 앱에 상태 변경 요청
  const handleToggleDarkMode = (nextIsDarkMode) => {
    setIsDarkMode(nextIsDarkMode);
    // 다크 모드를 토글할 때 그 변경 사항을 state로 저장, 이를 기반으로 UI 재렌더링
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
          style={{ marginBlockStart: 8 }}
          onClick={handleSaveDarkMode}
        >
          테마 저장
        </button>
      </div>

      <Switcher value={isDarkMode} onToggle={handleToggleDarkMode} />
    </main>
  );
}

export default SyncWebStorage;
