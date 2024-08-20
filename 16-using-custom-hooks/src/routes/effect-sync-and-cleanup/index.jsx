import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import useDocumentTitle from '@/hooks/useDocumentTitle';
import NavLink from './components/NavLink';
import S from './style.module.css';

function EffectSyncAndCleanup() {
  useDocumentTitle('이펙트 동기화 & 정리');

  const [isClockOn, setIsClockOn] = useState(false);

  const handleToggle = () => setIsClockOn((s) => !s);

  const outletContextValue = {
    isOn: isClockOn,
    onToggle: handleToggle
  }

  return (
    <main id="page">
      <h1 className="headline">마우스 위치 (이벤트 연결 &amp; 클린업)</h1>

      <div className="description">
        <p>이펙트(Effects)는 리액트를 벗어난 시스템과 동기화에 사용됩니다.</p>
        <p>
          하지만 리액트 시스템은 리-렌더링이 될 경우 남은 이펙트가 반복될 수
          있습니다.
        </p>
        <p>그러므로 일부 이펙트는 정리(cleanup)가 필요합니다.</p>
      </div>

      <nav className={S.nav}>
        <NavLink to="" end>
          마우스 위치 추적
        </NavLink>
        <NavLink to="clock">시계 ON/OFF</NavLink>
        <NavLink to="useless-checkbox">쓸모없는 체크박스</NavLink>
      </nav>

      <Outlet context={outletContextValue} />
    </main>
  );
}

export default EffectSyncAndCleanup;
