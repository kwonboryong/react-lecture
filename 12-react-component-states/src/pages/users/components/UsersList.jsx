import { UsersListType } from '@/@types/type.d';
import UserDetail from './UserDetail';

UsersList.propTypes = {
  users: UsersListType.isRequired,
};

function UsersList({ users }) {
  return (
    <ul className="UsersList">
      {users.map((user) => (
        <UserDetail key={user.id} user={user} />
      ))}
    </ul>
  );
}

export default UsersList;
