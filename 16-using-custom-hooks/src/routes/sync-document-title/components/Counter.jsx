import useDocumentTitle from '@/hooks/useDocumentTitle';
import { getStorageData, setStorageData } from '@/utils';
import { useId, useState } from 'react';
import S from './Counter.module.css';

const COUNTER_COUNT = '@counter/count';
const COUNTER_STEP = '@counter/step';
const DOCUMENT_INITIAL_TITLE = '문서 제목 동기화';

function Counter() {
  const id = useId();

  const [count, setCount] = useState(() =>
    getStorageData(COUNTER_COUNT, 0, 'session')
  );

  // 파생된 상태 + 커스텀 훅
  const documentTitle = `(${count}) ` + DOCUMENT_INITIAL_TITLE;
  // documentTitle 값이 변경될 때마다 useDocumentTitle 훅 내부의 이펙트 함수 실행 됨
  useDocumentTitle(documentTitle);

  const [step, setStep] = useState(() =>
    getStorageData(COUNTER_STEP, 1, 'session')
  );

  const handleDecrease = () => {
    let nextCount = count - step;
    if (nextCount <= 1) nextCount = 1;
    setCount(nextCount);
  };

  const handleIncrease = () => {
    setCount(count + step);
  };

  const handleChangeStep = (e) => {
    setStep(Number(e.target.value));
  };

  const handleSaveToStorage = () => {
    setStorageData(COUNTER_COUNT, count, 'session');
    setStorageData(COUNTER_STEP, step, 'session');
  };

  const isDisabled = count <= 1;

  return (
    <>
      <div className={S.component}>
        <div style={{ marginBlockEnd: 20 }}>
          <button type="button" onClick={handleSaveToStorage}>
            이벤트로 웹 스토리지 동기화
          </button>
        </div>

        <button
          type="button"
          aria-label="카운트 감소"
          title="카운트 감소"
          disabled={isDisabled}
          onClick={handleDecrease}
        >
          <svg
            fill="none"
            strokeWidth={1.5}
            width={12}
            height={12}
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </button>
        <output>{count}</output>
        <button
          type="button"
          aria-label="카운트 증가"
          title="카운트 증가"
          onClick={handleIncrease}
        >
          <svg
            fill="none"
            strokeWidth={1.5}
            stroke="currentColor"
            width={12}
            height={12}
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 15.75 7.5-7.5 7.5 7.5"
            />
          </svg>
        </button>
      </div>
      <div className={S.changeStep}>
        <label htmlFor={id}>step 변경</label>
        <input type="number" id={id} value={step} onChange={handleChangeStep} />
      </div>
    </>
  );
}

export default Counter;
