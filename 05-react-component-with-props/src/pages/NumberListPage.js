import React from 'https://esm.sh/react';
import NumberList from '../components/NumberList.function.js';

// NumberList 컴포넌트 -> 리액트 엘리먼트 생성
function NumberListPage() {
  return (
    React.createElement(NumberList, { count: 9 })
  )
}

export default NumberListPage;