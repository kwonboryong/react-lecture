import { node } from 'prop-types';
import S from './style.module.css';

AppForm.propTypes = {
  children: node.isRequired,
};

function AppForm({ children, ...restProps }) {
  return (
    <form className={S.component} {...restProps}>
      {children}
    </form>
  );
}

export default AppForm;
