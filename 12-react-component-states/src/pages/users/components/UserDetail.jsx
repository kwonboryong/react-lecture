import { UserType } from '@/@types/type.d';

// 타입 검사
UserDetail.propTypes = {
  user: UserType.isRequired,
};

function UserDetail({ user }) {
  return (
    <li>
      <strong>{user.name}</strong>{' '}
      <span>
        <a
          href={`mailto:${user.email}`}
          style={{ color: '#aaa', textDecoration: 'none' }}
        >
          {user.email} ({user.city})
        </a>
      </span>
    </li>
  );
}

export default UserDetail;
