import { RouterProvider } from 'react-router-dom';
import Fallback from '@/pages/Fallback';
import router from '@/router';

function App() {
  return (
    <div className="App">
      <Fallback />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
