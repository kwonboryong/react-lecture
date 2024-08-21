import { createBrowserRouter } from 'react-router-dom';

import RootLayout from '@/components/RootLayout';
import OptimizingRenders from './routes/optimizing-renders';
import TaskManagerUsingReducer from './routes/task-manager';
import PropsDrillingSolution from './routes/props-drilling-solution';
import SwitchTheme from './routes/switch-theme';
import SignUpUser from './routes/signup-user';
import SignInUser from './routes/signin-user';

// 앱 내비게이션 설정
const navigation = [
  { path: '/', text: '렌더링(성능) 최적화', element: <OptimizingRenders /> },
  {
    path: '/props-drilling-solution',
    text: '프롭스 드릴링 이슈 해결책',
    element: <PropsDrillingSolution />,
  },
  {
    path: '/theme-switch',
    text: '테마 스위치 (컨텍스트 관리)',
    element: <SwitchTheme />,
  },
  {
    path: '/task-manager',
    text: '테스크 매니저 (리듀서 활용)',
    element: <TaskManagerUsingReducer />,
  },
  {
    path: '/signin-user',
    text: '사용자 로그인 (인증 관리)',
    element: <SignInUser />,
  },
  {
    path: '/signup-user',
    text: '사용자 회원가입',
    element: <SignUpUser />,
    display: false,
  },
];

// GlobalNav 컴포넌트에서 사용되는 내비게이션 데이터
export const navigationItems = navigation
  .filter((item) => item?.display === undefined)
  .map(({ path, text }) => ({
    path,
    text,
  }));

// 루트 리스트
export const routes = [
  {
    path: '/',
    element: <RootLayout />,
    children: navigation.map((item) => {
      const route = { element: item.element };

      if (item.path === '/' && item.path === '') route.index = true;
      else route.path = item.path;

      return route;
    }),
  },
];

const router = createBrowserRouter(routes);

export default router;
