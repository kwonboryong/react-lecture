import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';

import router from '@/router';
import { ThemeProvider } from '@/contexts/theme';
import { AuthProvider } from '@/contexts/auth';

function App() {
  return (
    <>
      <AuthProvider>
        <ThemeProvider>
          <RouterProvider router={router} />
        </ThemeProvider>
      </AuthProvider>
      <Toaster />
    </>
  );
}

export default App;
