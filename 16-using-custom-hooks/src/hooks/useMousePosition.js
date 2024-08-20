import { useCallback, useState } from 'react';
import useEventListener from './useEventListener';

function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const onMouseTracking = useCallback(({ pageX: x, pageY: y }) => {
    setMousePosition({ x, y });
  }, []);

  useEventListener(document, 'mousemove', onMouseTracking);

  return mousePosition; // { x, y }
}

export default useMousePosition;
