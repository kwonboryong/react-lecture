import NavLink from '../NavLink';
import S from './Navigation.module.css';

function Navigation() {
  return (
    <nav className={S.component}>
      <ul>
        <li>
          <NavLink to="/">홈</NavLink>
        </li>
        <li>
          <NavLink to="/notes" end>
            노트 목록
          </NavLink>
        </li>
        <li>
          <NavLink to="/notes/new">노트 생성</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
