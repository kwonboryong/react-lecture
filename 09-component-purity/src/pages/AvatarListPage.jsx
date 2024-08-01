// --------------------------------------------------------------------------
// ✅ 컴포넌트 로직 재구성
// --------------------------------------------------------------------------
// - [ ] 데이터 분리
// - [ ] 리스트 렌더링
// - [ ] 컴포넌트 순수성 진단
// --------------------------------------------------------------------------

import Avatar from '@/components/Avatar';


const data = [
  {name: "야무", photo:"man-02.jpg", status:"online"},
  {name: "범쌤", photo:"man-02.jpg", status:"online"},
  {name: "주원", photo:"man-02.jpg", status:"online"},
  {name: "정민", photo:"man-02.jpg", status:"online"},
]



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
