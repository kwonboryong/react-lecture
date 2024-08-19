import { useEffect, useRef, useState } from 'react';
import { animate, spring } from 'motion';
import { getRandomMinMax } from '@/utils';
import S from './Peekaboo.module.css';

function Peekaboo() {
  const [sections] = useState(Array(9).fill(null));

  const [peekaboo, setPeekaboo] = useState(false);

  const [randomIndex] = useState(() => {
    const min = 1;
    const max = sections.length;
    const randomIndex = getRandomMinMax(min, max);

    return randomIndex;
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
        { x: [1000, 0], opacity: [0, 1] },
        {
          delay: 0.5,
          easing: spring({ stiffness: 800, damping: 15, mass: 2 }),
        }
      );
    } else {
      animate(peekabooCharacter, { x: [0, 1000], opacity: [0, 1] });
    }
  }, [peekaboo]);

  useEffect(() => {
    const targetIndex = randomIndex - 1;
    const targetSectionElements = Array.from(sectionsRef.current.values());
    const targetSectionElement = targetSectionElements.at(targetIndex);

    const intersectionObserver = new IntersectionObserver((entries) => {
      const entry = entries[0];

      if (entry.isIntersecting) {
        setPeekaboo(true);
      } else {
        setPeekaboo(false);
      }
    });

    intersectionObserver.observe(targetSectionElement);

    return () => {
      intersectionObserver.unobserve(targetSectionElement);
    };
  }, [randomIndex]);

  const sectionsRef = useRef(null);

  const getSectionMap = () => {
    if (!sectionsRef.current) {
      sectionsRef.current = new Map();
    }
    return sectionsRef.current;
  };

  const collectSections = (key, sectionElement) => {
    const sectionMap = getSectionMap();

    if (sectionElement) {
      sectionMap.set(key, sectionElement);
    } else {
      sectionMap.delete(key);
    }
  };

  return (
    <div className={S.component}>
      {sections.map((section, index) => {
        const idx = index + 1;
        const styles = { backgroundColor: `var(--purple-${idx}00)` };

        return (
          <section
            key={index}
            ref={collectSections.bind(null, index)}
            className={S.section}
            style={styles}
          >
            {idx}
            {renderPeekaboo(idx)}
          </section>
        );
      })}
    </div>
  );
}

export default Peekaboo;
