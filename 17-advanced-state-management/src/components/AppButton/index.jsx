import { bool, element, node, object } from 'prop-types';
import S from './style.module.css';

AppButton.propTypes = {
  submit: bool,
  reset: bool,
  disabled: bool,
  icon: element,
  children: node.isRequired,
  buttonProps: object,
};

function AppButton({
  submit = false,
  reset = false,
  disabled = false,
  icon = null,
  children,
  buttonProps = null,
  ...restProps
}) {
  let type = 'button';

  if (submit) type = 'submit';
  if (reset) type = 'reset';

  return (
    <div className={S.component} {...restProps}>
      <button type={type} disabled={disabled} {...buttonProps}>
        {icon && <span className={S.icon}>{icon}</span>}
        {children}
      </button>
    </div>
  );
}

export default AppButton;
