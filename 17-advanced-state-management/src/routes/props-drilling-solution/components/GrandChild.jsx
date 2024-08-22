import { useTheme } from '@/contexts/theme';
import { usePage } from '../context';
import S from './style.module.css';

function GrandChild() {
  // 컨텍스트 값 가져오기
  const { message } = usePage();

  const { forground, background, accent } = useTheme(({ theme }) => theme);

  return (
    <div className={S.box} style={{ backgroundColor: background }}>
      <strong className={S.label} style={{ color: accent }}>
        Grand Child
      </strong>
      <p style={{ color: forground }}>{message}</p>
    </div>
  );
}

export default GrandChild;
