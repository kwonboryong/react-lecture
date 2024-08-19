import { Link } from 'react-router-dom';

function NoteDetailPage() {
  return (
    <main>
      <h1>노트 상세 페이지</h1>
      <p>
        <Link to="/notes">노트 목록</Link> 페이지로 이동합니다.
      </p>
    </main>
  );
}

export default NoteDetailPage;
