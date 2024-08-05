// --------------------------------------------------------------------------
// ✅ UsersPage 컴포넌트
// --------------------------------------------------------------------------
// - [ ] data/users.json 파일에서 사용자 목록 데이터 불러오기
// - [ ] 사용자 검색 필드 및 목록, 검색 정보를 화면에 렌더링
// - [ ] 사용자 목록 정보 데이터를 순환해 화면에 리스트 렌더링
// - [ ] 사용자 정보 검색 시, 검색된 데이터만 사용자 목록 업데이트
// - [ ] 사용자 정보 검색 시, 검색 정보 업데이트
// --------------------------------------------------------------------------

import UserSearchBox from './components/UserSearchBox';
import UserListCount from './components/UserListCount';
import UsersList from './components/UsersList';

export function UsersPage() {
  return (
    <div className="UsersPage">
      <UserSearchBox />
      <UsersList />
      <UserListCount />
    </div>
  );
}
