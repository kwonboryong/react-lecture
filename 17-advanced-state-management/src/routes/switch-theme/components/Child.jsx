import { object } from 'prop-types';
import S from './style.module.css';
import GrandChild from './GrandChild';

Child.propTypes = {
  theme: object,
};

function Child({ theme }) {
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
        Parent
      </strong>
      <GrandChild theme={theme} />
    </div>
  );
}

export default Child;
