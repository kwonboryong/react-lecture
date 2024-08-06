import { number } from 'prop-types';

UserListCount.propTypes = {
  currentSearchedUsersCount: number.isRequired,
  totalUsersCount: number.isRequired,
};

function UserListCount({ currentSearchedUsersCount, totalUsersCount }) {
  return (
    <span data-testid="user-list-count" style={{ fontSize: 12 }}>
      {currentSearchedUsersCount} / <b>{totalUsersCount}</b>
    </span>
  );
}

export default UserListCount;