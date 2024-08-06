// --------------------------------------------------------------------------
// ✅ UsersPage 컴포넌트
// --------------------------------------------------------------------------
// - [x] data/users.json 파일에서 사용자 목록 데이터 불러오기
// - [ ] 사용자 검색 필드 및 목록, 검색 정보를 화면에 렌더링
// - [ ] 사용자 목록 정보 데이터를 순환해 화면에 리스트 렌더링
// - [ ] 사용자 정보 검색 시, 검색된 데이터만 사용자 목록 업데이트
// - [ ] 사용자 정보 검색 시, 검색 정보 업데이트
// --------------------------------------------------------------------------

import { useState } from 'react';
import usersData from './data/users.json';
import UserSearchBox from './components/UserSearchBox';
import UserListCount from './components/UserListCount';
import UsersList from './components/UsersList';

function UsersPage() {
  // 리액트 컴포넌트 상태 관리
  const [users] = useState(usersData);

  // (하위 컴포넌트의) 상태 끌어올리기
  // - input 검색어 상태 선언
  const [searchTerm, setSearchTerm] = useState('');

  // 검색 이벤트 핸들러 함수2
  // - input 검색어를 searchTerm 상태 변수에 저장
  const handleSearch = (userInput) => {
    setSearchTerm(userInput);
  };

  // 상태 쓰기(C)/읽기(R)/수정(U)/삭제(D)
  // - 오직 이 컴포넌트 내부에서만 가능 (리액트에 변경 요청)

  // 필터링한 사용자 목록
  // 1. users 목록에 input 검색어를 포함한 users 목록을 필터링하여 searchedUsersList에 저장
  // 2. searchedUsersList를 UsersList 컴포넌트에 전달
  const searchedUsersList = users.filter(
    (user) =>
      user.name.includes(searchTerm) ||
      user.email.includes(searchTerm) ||
      user.city.includes(searchTerm)
  );

  // 검색된 사용자 수
  const currentSearchedUsersCount = searchedUsersList.length;

  // 총 사용자 수
  const totalUsersCount = users.length;

  return (
    <div className="UsersPage">
      {/* input 검색어, 검색 이벤트 핸들러 함수 전달 */}
      <UserSearchBox searchTerm={searchTerm} onSearch={handleSearch} />

      {/* 필터링한 사용자 목록 전달 */}
      <UsersList users={searchedUsersList} />
      <UserListCount
        currentSearchedUsersCount={currentSearchedUsersCount}
        totalUsersCount={totalUsersCount}
      />
    </div>
  );
}

export default UsersPage;
