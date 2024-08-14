import PrintMousePosition from './components/PrintMousePosition';

function SyncAndCleanUpMousePosition() {
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

      <PrintMousePosition />
    </main>
  );
}

export default SyncAndCleanUpMousePosition;
