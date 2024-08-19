// - [x] [이펙트] 문서 제목 - 웹 스토리지 동기화
// - [x] [이벤트] 사용자 액션 → 스토리지에 데이터 동기화
// - [x] [스토리지 타입] 로컬 또는 세션 스토리지 선택
// ------------------------------------------------------
import { useId, useState, useEffect } from 'react';
import S from './Counter.module.css';
import { getStorageData, setStorageData } from '@/utils';

const DOCUMENT_INITIAL_TITLE = '문서 제목 동기화';

// 스토리지에 저장할 키(key)
// - @counter/count
const COUNTER_COUNT = '@counter/count';
// - @counter/step
const COUNTER_STEP = '@counter/step';

function Counter() {
  const id = useId();

  // 웹 스토리지에 저장하는 state
  const [count, setCount] = useState(() =>
    getStorageData(COUNTER_COUNT, 0, 'session')
  );

  // 카운터의 증감 단위 state
  const [step, setStep] = useState(() =>
    getStorageData(COUNTER_STEP, 2, 'session')
  );

  // 값 제한
  const isDisabled = count <= 1;


  // count
  useEffect(() => {
    // 브라우저 제목 동기화
    document.title = `(${count}) ` + DOCUMENT_INITIAL_TITLE;

    // 브라우저 웹 스토리지 동기화
    setStorageData(COUNTER_COUNT, count);
  }, [count]);


  // step
  useEffect(() => {
    // 브라우저 웹 스토리지 동기화
    setStorageData(COUNTER_STEP, step);
  }, [step]);


  // 증가 이벤트 핸들러
  const handleDecrease = () => {
    let nextCount = count - step;
    // count - 현재 카운터의 값, step - 사용자가 설정한 카운터 증감 단위

    // 값 제한
    if (nextCount <= 1) {
      nextCount = 1;
    }

    setCount(nextCount);
  };

  // 감소 이벤트 핸들러
  const handleIncrease = () => {
    setCount(count + step);
  };

  // step 이벤트 핸들러
  const handleChangeStep = (e) => {
    setStep(Number(e.target.value));
  };

  // 동기화 버튼을 누르면 웹 스토리지에 데이터 저장
  const handleSaveToStorage = () => {
    setStorageData(COUNTER_COUNT, count, 'session');
    setStorageData(COUNTER_STEP, step, 'session');
  };

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
        {/* value={step} => step 상태(state)와 input 필드의 값(value)을 동기화하기 위해 */}
      </div>
    </>
  );
}

export default Counter;
