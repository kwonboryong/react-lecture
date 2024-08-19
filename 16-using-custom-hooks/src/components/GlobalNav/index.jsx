import { useState } from 'react';
import S from './style.module.css';
import { NavLink } from 'react-router-dom';

function GlobalNav() {
  const [navigationList] = useState([
    { path: '/', text: '문서 제목 동기화' },
    { path: '/sync-web-storage', text: '웹 스토리지 동기화' },
    { path: '/effect-sync-and-cleanup', text: '이펙트 동기화 & 정리' },
    { path: '/scroll-trigger-effect', text: '스크롤 트리거 이펙트' },
    { path: '/sync-backend', text: '백엔드 환경 동기화' },
    { path: '/check-on-offline', text: '온/오프라인 체크' },
  ]);

  return (
    <nav className={S.component}>
      <h2>학습 주제</h2>
      <ul>
        {navigationList.map(({ path, text }) => (
          <li key={path}>
            <NavLink
              to={path}
              className={({ isActive }) => {
                return isActive ? S.active : undefined;
              }}
            >
              {text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default GlobalNav;
