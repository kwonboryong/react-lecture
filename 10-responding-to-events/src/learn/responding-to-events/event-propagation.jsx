// --------------------------------------------------------------------------
// ✅ 이벤트 전파
// --------------------------------------------------------------------------
// - [x] 전파 중지 (개별적으로 할 수 있음)
// - [x] 전파 대안으로 핸들러 전달
// - [x] 기본 작동 방지

// Event Delegation (위임)
// Event Propagation (전파)
// event.stopPropagation(); // 이벤트 전파 중지
// event.preventDefault(); // 이벤트 기본 작동을 차단
// --------------------------------------------------------------------------

import LayoutBox from './LayoutBox';


function EventPropagation() {

  function returnHandlePrint(color) {

    return function handlePrint(e) {
      console.log(color, e.target);
    };
  }

  return (
    <details>
      <summary>
        <b>이벤트 전파 &amp; 기본 작동 방지</b>
      </summary>

      <LayoutBox style={styles.cyan} onClick={returnHandlePrint('cyan')}>
        <LayoutBox
          style={styles.magenta}
          onClick={returnHandlePrint('magenta')}
        >
          <LayoutBox
            style={styles.yellow}
            onClick={returnHandlePrint('yellow')}
          >
            <LayoutBox
              style={styles.purple}
              onClick={returnHandlePrint('purple')}
            />
          </LayoutBox>
        </LayoutBox>
      </LayoutBox>
    </details>
  );
}

const styles = {
  cyan: {
    '--color': 'var(--cyan)',
  },
  magenta: {
    '--color': 'var(--magenta)',
  },
  yellow: {
    '--color': 'var(--yellow)',
  },
  purple: {
    '--color': 'var(--purple, #7423f6)',
  },
};

export default EventPropagation;
