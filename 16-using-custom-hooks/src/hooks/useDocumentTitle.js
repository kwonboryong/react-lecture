import { useLayoutEffect } from 'react';

/** @type { (documentTitle: string) => void } */
function useDocumentTitle(documentTitle) {
  useLayoutEffect(() => {
    document.title =
      documentTitle + ' - ' + import.meta.env.VITE_DOCUMENT_TITLE;
  }, [documentTitle]);
}

export default useDocumentTitle;

// 실행 시점

// 렌더링 (마운트)
// 1-1. useLayoutEffect의 이펙트 콜백 함수
// 1-2. useEffect의 이펙트 콜백 함수

// 리-렌더링 (업데이트)

// DOM 커밋 시점

// 2-1. useLayoutEffect의 이펙트의 클린업 함수
// 2-2. useLayoutEffect의 이펙트 콜백 함수

// 브라우저 페인팅 시점r

// 2-3. useEffect의 이펙트의 클린업 함수
// 2-4. useEffect의 이펙트 콜백 함수
