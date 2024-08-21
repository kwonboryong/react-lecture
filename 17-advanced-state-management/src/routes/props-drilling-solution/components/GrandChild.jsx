import { usePage } from '../context';
import S from './style.module.css';

function GrandChild() {
  // 컨텍스트 값 가져오기
  const { message, color } = usePage();

  return (
    <div className={S.box} style={{ backgroundColor: color }}>
      <strong className={S.label}>Grand Child</strong>
      <p>{message}</p>
    </div>
  );
}

export default GrandChild;
