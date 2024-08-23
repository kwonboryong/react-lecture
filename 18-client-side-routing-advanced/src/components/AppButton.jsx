import { memo } from 'react';
import { bool, element, node, object, string } from 'prop-types';
import clsx from 'clsx';

AppButton.propTypes = {
  submit: bool,
  reset: bool,
  disabled: bool,
  icon: element,
  className: string,
  children: node.isRequired,
  buttonProps: object,
  iconProps: object,
};

function AppButton({
  submit = false,
  reset = false,
  disabled = false,
  icon = null,
  className = '',
  children,
  buttonProps = null,
  iconProps = null,
  ...restProps
}) {
  let type = 'button';

  if (submit) type = 'submit';
  if (reset) type = 'reset';

  let buttonRestProps = {};
  let buttonClassName = '';

  if (buttonProps) {
    const { className, ...restProps } = buttonProps;
    buttonClassName = className;
    buttonRestProps = restProps;
  }

  let iconRestProps = {};
  let iconClassName = '';

  if (iconProps) {
    const { className, ...restProps } = iconProps;
    iconClassName = className;
    iconRestProps = restProps;
  }

  return (
    <div className={clsx('flex gap-1 w-full', className)} {...restProps}>
      <button
        type={type}
        className={clsx(
          'opacity-90 hover:opacity-100 flex gap-2 items-center justify-center rounded-full bg-accent text-white text-sm font-semibold px-6 py-2 border-0 disabled:bg-slate-500',
          buttonClassName
        )}
        disabled={disabled}
        {...buttonRestProps}
      >
        {icon && (
          <span
            className={clsx('inline-flex text-white text-base', iconClassName)}
            {...iconRestProps}
          >
            {icon}
          </span>
        )}
        {children}
      </button>
    </div>
  );
}

export default memo(AppButton);
