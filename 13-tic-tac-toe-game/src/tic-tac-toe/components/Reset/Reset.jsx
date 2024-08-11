import { func } from 'prop-types';
import S from './Reset.module.css';

// 타입 검사
Reset.propTypes = {
  onReset: func,
};

function Reset({ onReset }) {
  return (
    <div className={S.component}>
      <button type="button" className={S.component} onClick={onReset}>
        Reset
      </button>
    </div>
  );
}

export default Reset;
