import { createBrowserRouter } from 'react-router-dom';

import RootLayout from '@/pages/layout/RootLayout';
import HomePage from '@/pages/Home';

import NotesLayout from '@/pages/layout/NotesLayout';
import NoteListPage from '@/pages/NoteList';
import NewNotePage from '@/pages/NewNote';
import NoteDetailPage from '@/pages/NoteDetail';

// React Router v6.4+ (data APIs ✅)
const routes = [
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true, // '/'
        element: <HomePage />,
      },
      {
        path: 'notes',
        element: <NotesLayout />,
        children: [
          {
            index: true,
            element: <NoteListPage />,
          },
          {
            path: 'new',
            element: <NewNotePage />,
          },
          {
            path: 'detail',
            element: <NoteDetailPage />,
          },
        ],
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;