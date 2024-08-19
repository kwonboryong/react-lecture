import { Link } from 'react-router-dom';

function NoteListPage() {
  return (
    <main>
      <h1>노트 목록 페이지</h1>
      <ul>
        <li>
          <Link to={{ pathname: '/' }}>홈</Link>페이지로 이동합니다.
        </li>
        <li>
          <Link to="/notes/new">노트 작성</Link>페이지로 이동합니다.
        </li>
        <li>
          <Link to="/notes/detail">노트 1</Link> 페이지로 이동합니다.
        </li>
        <li>
          <Link to="/notes/detail">노트 2</Link> 페이지로 이동합니다.
        </li>
      </ul>
    </main>
  );
}

export default NoteListPage;
