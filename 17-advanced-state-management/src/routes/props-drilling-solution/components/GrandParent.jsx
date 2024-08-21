import Parent from './Parent';
import S from './style.module.css';

function GrandParent() {
  return (
    <div className={S.box}>
      <strong className={S.label}>Grand Parent</strong>
      <Parent />
    </div>
  );
}

export default GrandParent;
