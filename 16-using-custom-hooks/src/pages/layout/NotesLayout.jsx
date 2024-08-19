import { Link, Outlet } from 'react-router-dom';

function NotesLayout() {
  return (
    <>
      <Link to="new">작성</Link>
      <ul>
        <li>
          <Link to="detail">상세 1</Link>
        </li>
        <li>
          <Link to="detail">상세 2</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
}

export default NotesLayout;
