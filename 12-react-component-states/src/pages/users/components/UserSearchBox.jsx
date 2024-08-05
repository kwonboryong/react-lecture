function UserSearchBox() {
  return (
    <div className="UserSearchBox">
      <label>사용자 검색</label>
      <input type="search" placeholder="사용자 이름 입력" />
      <button type="button">찾기</button>
    </div>
  );
}

export default UserSearchBox;
