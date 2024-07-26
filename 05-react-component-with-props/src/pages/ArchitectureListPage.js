import React from 'https://esm.sh/react';
import ArchitectureList from '../components/architectures/ArchitectureList.class.js';
import ArchitectureListFunc from '../components/architectures/ArchitectureList.function.js';
import ArchitectureItem from '../components/architectures/ArchitectureItem.class.js';
import ArchitectureItemFunc from '../components/architectures/ArchitectureItem.function.js';
import listData from '../data/list.js';


// 클래스 컴포넌트
export class ArchitectureListClassPage extends React.Component {
  render() {
    // ArchitectureList 컴포넌트
    return React.createElement(ArchitectureList, {
      lang: 'en',
      children: listData.items.map(({ id, title }) =>
        React.createElement(ArchitectureItem, { id, title })
      ),
    });
  }
}


// 함수 컴포넌트
export function ArchitectureListPage() {
  // ArchitectureListFunc 컴포넌트
  return React.createElement(ArchitectureListFunc, {
    lang: 'en',
    children: listData.items.map(({ id, title }) =>
      React.createElement(ArchitectureItemFunc, { id, title })
    ),
  });
}

