import router from '@/router';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from './contexts/theme';

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
