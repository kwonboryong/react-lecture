import { Outlet, useNavigation } from 'react-router-dom';
import { AppFooter, AppHeader, AppNav, AppSpinner } from '@/components';

function RootLayout() {
  const navigation = useNavigation();

  const isLoading = navigation.state === 'loading';

  return (
    <div className="h-screen bg-indigo-50/30 flex flex-col">
      <AppHeader />
      <AppNav />
      <main className="flex-1 m-4">
        {isLoading ? (
          <AppSpinner
            size={100}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          />
        ) : (
          <Outlet />
        )}
      </main>
      <AppFooter />
    </div>
  );
}

export default RootLayout;
