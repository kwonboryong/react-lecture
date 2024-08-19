// --------------------------------------------------------------------------
// ✅ ref callback → effect
// --------------------------------------------------------------------------
// - [ ] Ref 콜백 함수는 마운트 시점에 실행됩니다. 이를 이펙트로 변경해봅니다.
// --------------------------------------------------------------------------
import { animate, spring } from 'motion';
import { bool, func } from 'prop-types';
import S from './Switcher.module.css';

// 타입 검사
Switcher.propTypes = {
  value: bool,
  onToggle: func,
};

// 애니메이션
const springAnimation = spring({ stiffness: 500, damping: 40 });


function Switcher({ value = false, onToggle, ...restProps }) {
  // { value = false } => 라이트 모드
  // - 처음 컴포넌트를 렌더링할 때 다크 모드가 아닌 상태로 시작하도록 설정

  // 테마 모드 토글 기능
  // - 다크 모드가 켜져 있으면 끄고, 꺼져 있으면 킴
  const handleToggle = () => onToggle?.(!value);
  // - onToggle이 존재하면(onToggle?.), 현재 value 상태의 반대값을 인수로 넘겨 호출

  // 테마 버튼 스타일
  const classNames = `${S.component} ${value ? S.dark : ''}`.trim();
  // - 다크 모드일 때 dark 스타일 적용


  // 애니메이션 적용
  // - refCallback 함수 = ref를 통해 DOM 요소(el)에 직접 접근할 때 사용
  const refCallback = (el) => {
    if (el) {
      if (value) {
        // value가 true이면 x: 50으로 이동 
        animate(el, { x: 50 }, { easing: springAnimation });

      } else {
        // value가 false이면 x: 0으로 이동
        animate(el, { x: 0 }, { easing: springAnimation });
      }
    }
  };


  return (
    <div className={classNames}>
      <button
        role="switch"
        type="button"
        aria-checked={value}
        className={S.button}
        onClick={handleToggle}
        {...restProps}
      >
        <span className={S.ball} ref={refCallback} />
      </button>
    </div>
  );
}

export default Switcher;
