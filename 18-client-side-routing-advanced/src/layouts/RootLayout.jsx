import { Outlet } from 'react-router-dom';
import { AppFooter, AppHeader, AppNav } from '@/components';

function RootLayout() {
  return (
    <div className="Layout h-screen bg-indigo-50/30 flex flex-col">
      <AppHeader />
      <AppNav />
      <main className="flex-1 m-4">
        <Outlet />
      </main>
      <AppFooter />
    </div>
  );
}

export default RootLayout;
