import { UsersListType } from '@/@types/type.d';
import UserDetail from './UserDetail';
import './UsersList.css';

// 타입 검사
UsersList.propTypes = {
  users: UsersListType.isRequired,
};

function UsersList({ users }) {
  // {users} = 필터링 된 사용자 목록(검색어가 없을 땐 전체 목록)
  
  return (
    <ul className="UsersList">
      {users.map((user) => (
        <UserDetail key={user.id} user={user} />
      ))}
    </ul>
  );
}

export default UsersList;
