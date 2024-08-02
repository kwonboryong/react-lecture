// --------------------------------------------------------------------------
// ✅ 테스트 시나리오
// --------------------------------------------------------------------------
// - 컴포넌트 렌더링 관점에서 어떤 테스트를 수행할 지 고민해 작성하세요.
// --------------------------------------------------------------------------

import Avatar from '@/components/Avatar';

function AvatarListPage() {
  return (
    <ul className="AvatarList">
      <li>
        <Avatar name="야무" photo="man-02.jpg" status="online" />
      </li>
      <li>
        <Avatar name="범쌤" photo="man-04.jpg" status="away" />
      </li>
      <li>
        <Avatar name="주원" photo="woman-04.jpg" status="dont-disturb" />
      </li>
      <li>
        <Avatar name="정민" photo="woman-01.jpg" />
      </li>
    </ul>
  );
}

export default AvatarListPage;
