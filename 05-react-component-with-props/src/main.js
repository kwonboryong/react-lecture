import React from 'https://esm.sh/react';
import { createRoot } from 'https://esm.sh/react-dom';
import AvatarListPage from './pages/AvatarPageList.js';

// 리액트 앱을 렌더링 할 DOM 요소 참조
const container = document.getElementById('react-app');


// DOM 요소가 존재한다면?
if (container) {

  // createRoot(container).render(
  //   React.createElement(ArchitectureListPage)
  // );

  // 실습 2
  createRoot(container).render(
    React.createElement(AvatarListPage)
  );


} else {
  console.warn('문서에 "#app" 요소가 존재하지 않습니다.');
}

