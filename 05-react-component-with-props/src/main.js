import React from 'https://esm.sh/react';
import { createRoot } from 'https://esm.sh/react-dom';
import { ArchitectureListPage } from './pages/ArchitectureListPage.js';

// 리액트 앱을 렌더링 할 DOM 요소 참조
const container = document.getElementById('react-app');


// DOM 요소가 존재한다면?
if (container) {

  // DOM 요소를 리액트 돔 루트로 만든 후, 리액트 앱 렌더링
  createRoot(container).render(
    React.createElement(ArchitectureListPage)
  );


} else {
  console.warn('문서에 "#app" 요소가 존재하지 않습니다.');
}

