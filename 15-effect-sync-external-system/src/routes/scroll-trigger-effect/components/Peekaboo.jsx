// --------------------------------------------------------------------------
// ✅ 스크롤 트리거 이펙트
// --------------------------------------------------------------------------
// - [ ] 코드 해설
// - [ ] sectionMapRef 참조 객체에 순환된 <section> 요소를 Map 데이터로 수집합니다.
// - [ ] 랜덤 <section> 요소가 뷰포트 안에 들어왔는 지 확인합니다. (IntersectionObserver)
// - [ ] 랜덤 <section> 요소가 뷰포트 안에 있으면 피카부(까꿍) 애니메이션 발동되도록 구현합니다.
// --------------------------------------------------------------------------

import { useEffect, useRef, useState } from 'react';
import { animate, spring } from 'motion';
import S from './Peekaboo.module.css';

function Peekaboo() {
  const [sections] = useState(Array(9).fill(null));

  const [peekaboo] = useState(false);

  const [randomIndex] = useState(() => {
    const min = 4;
    const max = sections.length;
    const randomIndex = Math.round(Math.random() * (max - min) + min);
    console.log(randomIndex);
    return 1;
  });

  const peekabooRef = useRef(null);

  const renderPeekaboo = (idx) =>
    idx === randomIndex ? (
      <span ref={peekabooRef} className={S.peekaboo}>
        👻
      </span>
    ) : null;

  useEffect(() => {
    const peekabooCharacter = peekabooRef.current;

    if (peekaboo) {
      animate(
        peekabooCharacter,
        { x: [1000, 0], opacity: 1 },
        {
          delay: 0.5,
          easing: spring({ stiffness: 800, damping: 15, mass: 2 }),
        }
      );
    } else {
      animate(peekabooCharacter, { x: [0, 1000], opacity: 0 });
    }
  }, [peekaboo]);

  return (
    <div className={S.component}>
      {sections.map((section, index) => {
        const idx = index + 1;
        const styles = { backgroundColor: `var(--purple-${idx}00)` };

        return (
          <section key={index} className={S.section} style={styles}>
            {idx}
            {renderPeekaboo(idx)}
          </section>
        );
      })}
    </div>
  );
}

export default Peekaboo;
