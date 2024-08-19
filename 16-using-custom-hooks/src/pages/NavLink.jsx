import { NavLink as RR_NavLink } from 'react-router-dom';
import S from './NavLink.module.css';

function NavLink(props) {
  return (
    <RR_NavLink
      className={({ isActive }) => (isActive ? S.active : undefined)}
      {...props}
    />
  );
}

export default NavLink;
