import { useMemo } from 'react';
import useStateWithCallback from './useStateWithCallback';

function useToggle(isOn = false, callback) {
  const [isToggle, setIsToggle] = useStateWithCallback(() => {
    if (typeof isOn !== 'boolean') {
      isOn = Boolean(isOn);
    }

    return isOn;
  }, callback);

  const value = useMemo(() => [isToggle, setIsToggle], [isToggle, setIsToggle]);

  return value;
}

export default useToggle;
