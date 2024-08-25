import { Outlet, useNavigation } from 'react-router-dom';
import { AppFooter, AppHeader, AppNav, AppSpinner } from '@/components';

function RootLayout() {
  const { state } = useNavigation();

  return (
    <div className="Layout h-screen bg-indigo-50/30 flex flex-col">
      <AppHeader />
      <AppNav />

      <main className="flex-1 m-4">
        {/* 로딩 상태에 따른 조건부 렌더링 */}
        {state === 'loading' ? (
          <div className="flex flex-col gap-2 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <AppSpinner />
            <p>페이지를 로딩 중입니다.</p>
          </div>
        ) : (
          <Outlet />
        )}
      </main>

      <AppFooter />
    </div>
  );
}

export default RootLayout;
