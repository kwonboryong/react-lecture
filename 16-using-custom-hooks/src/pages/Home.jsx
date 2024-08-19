import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <h1>홈 페이지</h1>
      <p>싱글 페이지 애플리케이션의 홈 페이지입니다.</p>
      <Link to="/notes">노트 목록</Link>
    </div>
  );
}

export default HomePage;
