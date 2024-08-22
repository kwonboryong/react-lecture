import { useTheme } from '@/contexts/theme';
import TodoListApp from './TodoListApp';
import S from './style.module.css';

function GrandChild() {
  const { theme } = useTheme();

  const {
    GrandChild: { background, label },
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
        Grand Child
      </strong>
      <TodoListApp />
    </div>
  );
}

export default GrandChild;
