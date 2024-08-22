import { useTheme } from '@/contexts/theme';
import S from './style.module.css';
import Child from './Child';

function Parent() {
  const { theme } = useTheme();

  const {
    Parent: { background, label },
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
        Parent
      </strong>
      <Child />
    </div>
  );
}

export default Parent;
