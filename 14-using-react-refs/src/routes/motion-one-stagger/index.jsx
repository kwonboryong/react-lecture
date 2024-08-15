// --------------------------------------------------------------------------
// ✅ 스태거 애니메이션
// --------------------------------------------------------------------------
// - [x] stagger() 함수를 사용해 스태거 애니메이션을 적용합니다.
// - [x] getMap 함수를 작성해 참조 객체의 current 값으로 Map 객체를 반환하도록 합니다.
// - [x] <SoccorBall /> 요소에 mountedRef 속성을 사용해 맵(map) 데이터로 수집합니다.
// - [x] 사용자가 버튼을 누르면 스태거 애니메이션이 적용되도록 구현합니다.
// --------------------------------------------------------------------------
import { animate, stagger } from 'motion';
import { useRef, useState } from 'react';
import SoccorBall from './components/SoccorBall';
import S from './style.module.css';

function MotionOneStagger() {
  // 애니메이션할 공의 개수를 정의
  const [balls] = useState(Array(6).fill(null));

  // DOM 요소를 저장하는 데 사용
  const soccorBallsRef = useRef(null); 

  // soccorBallsRef.current가 존재하지 않을 경우, 새로운 Map 객체를 생성하여 반환
  const getMap = () => {
    if (!soccorBallsRef.current) {
      soccorBallsRef.current = new Map();
    }

    return soccorBallsRef.current;
  };


  // 애니메이션을 시작하는 함수
  const handleAnimateBalls = () => {
    // Map 활용 예시 코드 (공식 문서에서 기술하는 방법)
    const map = getMap();
    const mapArray = Array.from(map.values());

    if (mapArray.length > 0) {

      animate(
        mapArray,
        { x: [0, 400, 0], rotate: [0, 360, -360] },
        {
          delay: stagger(0.3),
          duration: 2,
        }
      );
    }
  };

  // SoccorBall 컴포넌트가 마운트되거나 언마운트될 때 호출
  const mountedCallback = (index, el) => {
    const map = getMap();

    if (el) {
      // el이 존재하면 index와 el 쌍을 Map에 추가
      map.set(index, el);

    } else {
      // el이 없으면 Map에서 해당 index를 삭제
      map.delete(index);
    }
    // 참조 객체의 current 값에 담긴 객체 (얼마든지 수정)
    // const soccorBalls = soccorBallsRef.current;
    // soccorBalls.push(soccorBallElement);
  };

  return (
    <main className={S.component}>
      <h1 className={S.headline} lang="en">
        stagger()
      </h1>
      <div className={S.description}>
        <p>
          Motion One 라이브러리를 사용해 실제 DOM 노드에 애니메이션을
          적용합니다.
        </p>
        <p>
          자세한 사용법은{' '}
          <a
            href="https://motion.dev/docs/stagger"
            rel="noreferrer noopener"
            target="_blank"
          >
            stagger()
          </a>
          문서를 참고합니다.
        </p>
      </div>

      <div className={S.description}>
        <p>
          사커볼이 화면 벽면에 부딫힌 후, 다시 돌아오도록 애니메이션을
          설정합니다.
        </p>
      </div>

      <button className={S.button} type="button" onClick={handleAnimateBalls}>
        스태거 애니메이션
      </button>

      <div className={S.balls}>
        {balls.map((color, index) => {
          return (
            <SoccorBall ref={mountedCallback.bind(null, index)} key={index} />
            // SoccorBall이 DOM에 마운트될 때 mountedCallback 함수를 호출하여 해당 요소의 참조를 Map 객체에 저장
            // - mountedCallback 함수의 this 컨텍스트를 null로 설정하고, 첫 번째 인자로 index를 전달하는 새로운 함수를 생성
            // - SoccorBall 요소가 마운트될 때 호출된다.
          );
        })}
      </div>
    </main>
  );
}

export default MotionOneStagger;
