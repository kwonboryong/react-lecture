import { Outlet } from 'react-router-dom';
import { AppHeader, GlobalNav } from '@/components';
import S from './style.module.css';

function RootLayout() {
  return (
    <div className={S.component}>
      <AppHeader />
      <div className={S.layout}>
        <GlobalNav />
        <Outlet />
      </div>
    </div>
  );
}

export default RootLayout;
