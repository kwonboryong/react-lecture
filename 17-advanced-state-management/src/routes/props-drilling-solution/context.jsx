/* eslint-disable react-refresh/only-export-components */
import { array, node, object, oneOfType } from 'prop-types';
import { createContext, useContext } from 'react';

// 페이지의 컨텍스트 생성
const pageContext = createContext();

// 컨텍스트 프로바이더 래퍼 컴포넌트
// <Context.Provider> 감싸는 컴포넌트 작성
PageProvider.propTypes = {
  value: oneOfType([object, array]).isRequired,
  children: node.isRequired,
};

export function PageProvider({ value, children }) {
  return <pageContext.Provider value={value}>{children}</pageContext.Provider>;
}

// 커스텀 훅
// useContext() 훅을 사용하는 커스텀 훅 작성
// 컨텍스트 공개 없이 커스텀 훅을 사용해 데이터 읽기/쓰기

export function usePage() {
  return useContext(pageContext);
}
