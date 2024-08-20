import { useRef } from 'react';
// import useOnline from '@/hooks/useOnline';
import useStateWithCallback from '@/hooks/useStateWithCallback';
import Switcher from '../sync-web-storage/components/Switcher';
import useToggle from '@/hooks/useToggle';

function CheckOnOffline() {
  // const isOnline = useOnline();
  const [isToggle, setIsToggle] = useToggle(false, (nextIsToggle) => {
    document.body.style.cssText  = `
      background-color: ${nextIsToggle ? '#000' : '#fff'};
      color: ${nextIsToggle ? '#fff' : '#000'};
    `;
  });

  return (
    <div style={{ display: 'flex', flexFlow: 'column', gap: 20 }}>
      <h1>Check On/Offline</h1>
      <Switcher value={isToggle} onToggle={() => setIsToggle(t => !t)} />
      <p>{ isToggle.toString() }</p>

      <ChangeStateAndCallback />
    </div>
  );
}

export default CheckOnOffline;

/* -------------------------------------------------------------------------- */

function ChangeStateAndCallback() {
  const [count, setCount] = useStateWithCallback(0);

  const [message, setMessage] = useStateWithCallback(
    /* 초기 상태 */
    'hello',
    /* 상태 업데이트 이후 실행이 보장되는 콜백 함수 (이펙트 코드 추가 가능) */
    (nextMessage) => {
      pRef.current.textContent = nextMessage.toUpperCase();
      setCount((c) => c + 1);
    }
  );

  const handleChangeMessage = () => {
    setMessage((m) => `${m} ❤️`);
  };

  const pRef = useRef(null);

  return (
    <>
      <button type="button" style={buttonStyles} onClick={handleChangeMessage}>
        메시지 변경 ({count})
      </button>

      {/* 선언적 프로그래밍 */}
      <output style={outputStyles}>{message.toUpperCase()}</output>
      <p ref={pRef} style={pStyles} />
    </>
  );
}

const buttonStyles = { alignSelf: 'start' };
const outputStyles = { fontWeight: 800 };
const pStyles = {
  border: '3px solid #d9dedf',
  borderRadius: 4,
  margin: 0,
  padding: 6,
};
