import GrandChild from './GrandChild';
import S from './style.module.css';

function Child() {
  return (
    <div className={S.box}>
      <strong className={S.label}>Child</strong>
      <GrandChild />
    </div>
  );
}

export default Child;
