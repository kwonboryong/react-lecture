import { Outlet } from 'react-router-dom';
import GlobalNav from '../GlobalNav';
import S from './style.module.css';

function RootLayout() {
  return (
    <div className={S.component}>
      <GlobalNav />
      <Outlet />
    </div>
  );
}

export default RootLayout;
