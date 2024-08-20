import { useState } from 'react';
import ClockOnOff from './ClockOnOff';

function ClockOnOffWrapper() {
  const [isClockOn, setIsClockOn] = useState(false);

  return (
    <ClockOnOff isOn={isClockOn} onToggle={() => setIsClockOn((s) => !s)} />
  );
}

export default ClockOnOffWrapper;
