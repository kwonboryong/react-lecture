import S from './style.module.css';
import GrandChild from './GrandChild';
import { useTheme } from '@/contexts/theme';

function Child() {
  const { theme } = useTheme();

  const {
    Child: { background, label },
  } = theme;

  const boxStyles = {
    backgroundColor: background,
    borderColor: label,
  };

  const labelStyles = {
    color: label,
  };

  return (
    <div className={S.box} style={boxStyles}>
      <strong className={S.label} style={labelStyles}>
        Child
      </strong>
      <GrandChild />
    </div>
  );
}

export default Child;
