// --------------------------------------------------------------------------
// ✅ 이벤트 전파
// --------------------------------------------------------------------------
// - [ ] 전파 중지
// - [ ] 전파 대안으로 핸들러 전달
// - [ ] 기본 작동 방지
// --------------------------------------------------------------------------

function EventPropagation() {
  return (
    <details>
      <summary>
        <b>이벤트 전파 &amp; 기본 작동 방지</b>
      </summary>
      <div className="box" style={styles.cyan}>
        <div className="box" style={styles.magenta}>
          <div className="box" style={styles.yellow}></div>
        </div>
      </div>
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
};

export default EventPropagation;
