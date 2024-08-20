import useDocumentTitle from '@/hooks/useDocumentTitle';
import { useLocalStorage, useSessionStorage } from '@/hooks/useWebStorage';
import { useId } from 'react';
import S from './Counter.module.css';

const COUNTER_COUNT = '@counter/count';
const COUNTER_STEP = '@counter/step';

function Counter() {
  const id = useId();

  const [count, setCount, countMethods] = useLocalStorage(
    COUNTER_COUNT,
    0,
    true
  );

  const {
    setItem: setCountItem,
    deleteItem: deleteCount,
    allClear,
  } = countMethods;

  useDocumentTitle(`(${count}) 문서 제목 동기화`);

  const [step, setStep, stepControls] = useSessionStorage(
    COUNTER_STEP,
    1,
    true
  );
  const { setItem: setStepItem, deleteItem: deleteStep } = stepControls;

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
    setCountItem(count);
    setStepItem(step);
  };

  const isDisabled = count <= 1;

  return (
    <>
      <div className={S.component}>
        <div style={{ marginBlockEnd: 20 }}>
          <button type="button" onClick={handleSaveToStorage}>
            카운트, 스탭 웹 스토리지 저장
          </button>
          <button type="button" onClick={deleteCount}>
            웹 스토리지에 저장된 카운트 삭제
          </button>
          <button type="button" onClick={deleteStep}>
            웹 스토리지에 저장된 스탭 삭제
          </button>
          <button type="button" onClick={allClear}>
            웹 스토리지 데이터 모두 삭제
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
