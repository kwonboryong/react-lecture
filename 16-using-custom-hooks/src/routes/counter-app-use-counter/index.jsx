import { VscChevronUp, VscChevronDown } from 'react-icons/vsc';
import useCounter from '@/hooks/useCounter';
import S from './style.module.css';
import useRenderCountLog from '@/hooks/useRenderCountLog';

function CounterApp() {
  const C = useCounter({ count: 1, max: 10, step: 2 });
  useRenderCountLog('CounterApp', 'text-decoration: underline; color: red');

  return (
    <main id="page" className={S.component}>
      <h1 className="headline">카운터 앱</h1>
      <div className="description">
        <p>useCounter() 훅을 사용해 카운터 앱 기능 구현</p>
      </div>

      <div>
        <button
          type="button"
          title={`${C.step} 증가`}
          aria-label={`${C.step} 증가`}
          disabled={C.isMaxDisabled}
          onClick={C.increment}
        >
          <VscChevronUp />
        </button>
        <output>{C.count}</output>
        <button
          type="button"
          title={`${C.step} 감소`}
          aria-label={`${C.step} 감소`}
          disabled={C.isMinDisabled}
          onClick={C.decrement}
        >
          <VscChevronDown />
        </button>
      </div>
    </main>
  );
}

export default CounterApp;
