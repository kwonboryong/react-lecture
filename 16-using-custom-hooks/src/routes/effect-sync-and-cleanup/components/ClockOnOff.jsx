import { bool, func } from 'prop-types';
import S from './ClockOnOff.module.css';
import useDocumentTitle from '@/hooks/useDocumentTitle';
import useClock from '@/hooks/useClock';

ClockOnOff.propTypes = {
  isOn: bool,
  onToggle: func,
};

function ClockOnOff({ isOn = false, onToggle }) {
  useDocumentTitle('시계 ON/OFF ← 이펙트 동기화 & 정리');
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