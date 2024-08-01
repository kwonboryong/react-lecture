import './styles/globals.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Learn from './learn/index';

const container = document.getElementById('react-app');

if (!container) {
  throw new Error('문서에 "#app" 요소가 존재하지 않습니다.');
}

createRoot(container).render(
  <StrictMode>
    <Learn />
  </StrictMode>
);
