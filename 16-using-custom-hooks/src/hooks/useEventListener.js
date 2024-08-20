import { useEffect } from 'react';

/** @type { (target: Document | HTMLElement, eventType: string, eventHandler: (e: Event) => void) => void} */
function useEventListener(target, eventType, eventHandler) {
  useEffect(() => {
    // console.log('이벤트 구독');
    target.addEventListener(eventType, eventHandler);

    return () => {
      // console.log('이벤트 구독 해지');
      target.removeEventListener(eventType, eventHandler);
    };
  }, [target, eventType, eventHandler]);
}

export default useEventListener;
