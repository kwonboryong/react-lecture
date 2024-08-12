// --------------------------------------------------------------------------
// ✅ animate() 함수 사용법
// --------------------------------------------------------------------------
// - [x] animate(선택자_또는_DOM_요소_집합, 속성, 옵션?)
// - [ ] 롤리팝을 x축 방향으로 400px만큼 이동해보세요.
// - [ ] 롤리팝을 360도(시계 방향) 회전해 굴러가도록 설정해보세요.
// - [ ] 롤리팝 애니메이션 진행 속도를 4초로 설정해보세요.
// - [ ] 진행률이 화면에 표시되도록 애니메이션해봅니다.
// --------------------------------------------------------------------------

import { useRef } from 'react';
import S from './AnimateDemo.module.css';

// 리액트 엘리먼트가 아닌, 실제 DOM 엘리먼트에 애니메이션 적용
// useRef(), ref callback, event handlers
import { animate } from 'motion';

function AnimateDemo() {
  const lollipopRef = useRef(null); // { current: null }

  const handleMoveAnimate = () => {
    // const lollipopElement = lollipopRef.current;
    const { current: element } = lollipopRef;

    // animate(target, props, options?)
    // animate(element, { transform: 'translateX(400px) rotate(360deg)' })
    animate(
      element, 
      { x: 400, rotate: 360 }, 
      { duration: 1.5, delay: 0.5 }
    );
  };

  const handleProgressAnimate = () => {};

  return (
    <div className={S.component}>
      <button className={S.button} type="button" onClick={handleMoveAnimate}>
        무빙 애니메이션
      </button>

      <figure ref={lollipopRef} className={S.lollipop} />

      <div className={S.wrapper}>
        <button
          type="button"
          className={S.button}
          onClick={handleProgressAnimate}
        >
          진행률 애니메이션
        </button>
        <output className={S.output}>0%</output>
      </div>
    </div>
  );
}

export default AnimateDemo;