import { object } from 'prop-types';
import S from './style.module.css';
import Child from './Child';

Parent.propTypes = {
  theme: object,
};

function Parent({ theme }) {
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
      <Child theme={theme} />
    </div>
  );
}

export default Parent;
