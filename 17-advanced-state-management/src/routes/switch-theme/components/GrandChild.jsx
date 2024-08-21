import { object } from 'prop-types';
import S from './style.module.css';
import TodoListApp from './TodoListApp';

GrandChild.propTypes = {
  theme: object,
};

function GrandChild({ theme }) {
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
      <TodoListApp theme={theme} />
    </div>
  );
}

export default GrandChild;
