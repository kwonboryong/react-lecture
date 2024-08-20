import { bool, func } from 'prop-types';
import { useOutletContext } from 'react-router-dom';
import useDocumentTitle from '@/hooks/useDocumentTitle';
import useClock from '@/hooks/useClock';
import S from './ClockOnOff.module.css';

ClockOnOff.propTypes = {
  isOn: bool,
  onToggle: func,
};

function ClockOnOff() {
  useDocumentTitle('시계 ON/OFF ← 이펙트 동기화 & 정리');

  const { isOn, onToggle } = useOutletContext();

  const time = useClock();

  const buttonLabel = isOn ? 'OFF' : 'ON';

  return (
    <div className={S.component}>
      <button type="button" lang="en" onClick={onToggle}>
        CLOCK {buttonLabel}
      </button>
      <output hidden={!isOn}>{time.toLocaleTimeString()}</output>
    </div>
  );
}

export default ClockOnOff;
