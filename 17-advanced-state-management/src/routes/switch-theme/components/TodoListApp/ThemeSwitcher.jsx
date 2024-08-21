import clsx from 'clsx';
import { useId } from 'react';
import { func, string } from 'prop-types';
import { visibilityType } from './@types';
import { visibilities } from './@constants';
import S from './style.module.css';

ThemeSwitcher.propTypes = {
  visibility: visibilityType.isRequired,
  themeColor: string.isRequired,
  focusColor: string.isRequired,
  onChangeVisibility: func,
  onChangeThemeColor: func,
  onChangeFocusColor: func,
};

function ThemeSwitcher({
  visibility,
  themeColor,
  focusColor,
  onChangeVisibility,
  onChangeThemeColor,
  onChangeFocusColor,
}) {
  const themeColorInputId = useId();
  const focusColorInputId = useId();

  const handleChangeVisibility = (visibility) => () => {
    onChangeVisibility?.(visibility);
  };

  const handleChangeThemeColor = (e) => {
    onChangeThemeColor?.(e.target.value);
  };

  const handleChangeFocusColor = (e) => {
    onChangeFocusColor?.(e.target.value);
  };

  return (
    <div className={S.ThemeSwitcher}>
      <div role="group">
        <label htmlFor={themeColorInputId} className="sr-only">
          Theme Color
        </label>
        <input
          type="color"
          id={themeColorInputId}
          value={themeColor}
          onChange={handleChangeThemeColor}
          title="Change Theme Color"
        />
        <label htmlFor={focusColorInputId} className="sr-only">
          Focus Color
        </label>
        <input
          type="color"
          id={focusColorInputId}
          value={focusColor}
          onChange={handleChangeFocusColor}
          title="Change Focus Color"
        />
      </div>
      <ul>
        {visibilities.map((visibilityFilter, index) => (
          <li key={index}>
            <button
              type="button"
              className={clsx(visibility === visibilityFilter && S.active)}
              onClick={handleChangeVisibility(visibilityFilter)}
            >
              {visibilityFilter}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ThemeSwitcher;
