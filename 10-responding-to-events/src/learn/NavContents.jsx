function NavContents() {
  return (
    <nav className="NavContents" aria-label="학습 주제 탐색">
      <a href="#jsx-markup">JSX 마크업</a>
      <a href="#responding-to-events" className="active">
        이벤트 응답
      </a>
    </nav>
  );
}

export default NavContents;
