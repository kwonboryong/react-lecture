import { memo, useState } from 'react';
import { navigationItems } from '@/router';
import AppNavLink from './AppNavLink';

function AppNav() {
  const [items] = useState(navigationItems);

  return (
    <nav className="bg-white">
      <h2 className="sr-only">페이지 탐색</h2>

      {items.length > 0 && (
        <ul className="py-4 w-4/5 max-w-6xl mx-auto flex justify-center gap-4">
          {items.map((item, index) => {
            let end = false;
            // 경로가 정확히 일치해야 활성화 상태로 간주되는지 여부를 결정

            // '노트 리스트' 패널일 때 end를 true로 변경
            // - '노트 작성' 패널이 '노트'의 하위 컴포넌트이기 때문에 
            // 이렇게 설정하지 않으면 '노트'에 포함된 패널들이 모두 활성화 됨
            // (- 선택한 현재 메뉴만 활성화되는 기능이 구현되지 않음)
            if (item.path?.endsWith('/') || item.path === '/notes') {
              end = true;
            }

            return (
              <li key={item.path ?? index}>
                <AppNavLink to={item.path} end={end}>
                  {/* <AppNavLink> 태그 내부에 있는 내용이 자동으로 children prop으로 전달됨 */}
                  {/* -> item.text도 AppNavLink 컴포넌트 props로 전달*/}
                  {item.text}
                </AppNavLink>
              </li>
            );
          })}

          <li>
            <AppNavLink to="/notes/new">노트 작성</AppNavLink>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default memo(AppNav);
