import { object } from 'prop-types';
import S from './style.module.css';
import Parent from './Parent';

GrandParent.propTypes = {
  theme: object,
};

function GrandParent({ theme }) {
  const {
    GrandParent: { background, label },
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
        Grand Parent
      </strong>
      <Parent theme={theme} />
    </div>
  );
}

export default GrandParent;
