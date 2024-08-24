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
            if (item.path?.endsWith('/') || item.path === '/notes') {
              end = true;
            }
            return (
              <li key={item.path ?? index}>
                <AppNavLink to={item.path} end={end}>
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
