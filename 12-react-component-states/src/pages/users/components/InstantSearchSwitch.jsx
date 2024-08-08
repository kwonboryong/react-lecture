import { bool, func } from 'prop-types';

// 타입 검사
InstantSearchSwitch.propTypes = {
  isInstantSearch: bool,
  onToggle: func, // optional
};

function InstantSearchSwitch({ isInstantSearch = false, onToggle }) {
  
  return (
    <div className="formControl">
      <label style={{ userSelect: 'none' }}>
        <input
          type="checkbox"
          defaultChecked={isInstantSearch}
          onChange={onToggle}
        />{' '}
        인스턴트 서치
      </label>
    </div>
  );
}

export default InstantSearchSwitch;
