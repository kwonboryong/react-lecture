// JSX Runtime Mode [CLASSIC] 직접 주입
// import React from 'react';
// JSX => React.createElement(type, props, ...children);

// JSX Runtime Mode [AUTOMATIC] 자동 주입
// import { jsx } from 'react/jsx-runtime';
// JSX => jsx(type, props);

// React.Fragment 컴포넌트 사용이 필요할 때
// 자동 주입이 없음, 그래서 직접 주입 필요
// import { Fragment } from 'react';
// <Fragment> 컴포넌트 사용 가능
import { Fragment } from 'react';
import { ItemsType, ReactLibraryType } from '../@types/types.d';

// console.log(PropTypes);

function RenderLists({
  reactLibrary,
  items /* { id: string, message: string }[] */,
}) {
  // console.log(reactLibrary);

  // 함수 내부에 리스트 렌더링 코드를 작성해보세요.
  // react.d.ts
  // { @@typeof: 'Symbol(react.element)', ... }
  // JSDOC
  /**@type{() => Array<React.ReactElement>} */
  // const renderList = (options = {}) => {
  // const renderList = ({ reverse = false } = {}) => {
  //   // const { reverse = false } = options;
  //   // console.log({ reverse });

  //   let listItems = items; // 대기 → 로딩 실패 순

  //   if (reverse) {
  //     // [1] listItems = items.reverse();
  //     // listItems = items.reverse(); // 참조된 items을 직접 변경 (순서 바꾸기)
  //     // listItems = items.slice().reverse();
  //     // listItems = [...items].reverse();

  //     // [2] listItems = items.toReversed();
  //     listItems = items.toReversed(); // ES 2023 (v14) 추가
  //   }

  //   // 리스트 렌더링 결과 반환
  //   // - [ ] Array.prototype.forEach?
  //   // - [x] Array.prototype.map?
  //   return listItems.map((item) /* string */ => {
  //     // console.log(item);
  //     // JSX(React Element) Markup
  //     return <li key={item}>{item}</li>;
  //   });
  // };

  // const reversedList = renderList().toReversed();

  // 문
  let demoListUsingStatement = [];

  for (let item of items) {
    demoListUsingStatement.push(<li key={item.id}>{item.message}</li>);
  }

  // 식
  const demoList = items.map((item) => {
    return <li key={item.id}>{item.message}</li>;
  });

  const renderDemoList = () =>
    items.map(({ id, message }) => {
      return <li key={id}>{message}</li>;
    });

  // JSX 클린 코드를 위해 => 함수 몸체에 함수 정의 후 반환 값 활용
  const renderDefinitionList = (objectData) => {
    const definitionItems = Object.entries(objectData).map(([key, value]) => {
      // key, value => JSX (Markup 생성)
      // <React.Fragment></React.Fragment>
      // <></>
      // - React.Fragment 컴포넌트 & 리스트 렌더링
      // - Fragment 컴포넌트에 key 설정 필요
      // - 그러므로 <></> 표기법은 사용 X
      return (
        <Fragment key={key}>
          <dt>{key}</dt>
          <dd>{value}</dd>
        </Fragment>
      );
    });

    {
      /* 객체 데이터를 순환해 설명 목록으로 리스트 렌더링 합니다. */
    }
    {
      /* JavaScript에서 객체 순환하려면?
        - [1] for ~ in 문 순환 -> 배열 객체 정의해서 리스트 렌더링 (문이기 때문에 함수 몸체에서 사용해야 함)
        - [2] Object.entries() 메서드 활용 (식이므로 JSX 안에서 사용 가능)
        - [3] JSX 클린 코드를 위해 함수 컴포넌트 몸체에 함수를 정의하여 반환 값 활용
    */
    }
    return <dl className="reactLibrary">{definitionItems}</dl>;
  };

  return (
    <>
      <dt>리스트 렌더링(list rendering)</dt>
      <dd>
        {/* 직접 포함 */}
        <ul>
          {items.map(({ id, message }) => {
            return <li key={id}>{message}</li>;
          })}
        </ul>
        {/* 문에서 처리된 결과 값을 할당받은 지역 변수 참조 */}
        <ul>{demoListUsingStatement}</ul>
        {/* 함수 몸체의 지역 변수 참조 */}
        <ul>{demoList}</ul>
        {/* 함수 실행 결과 값 활용 */}
        <ul>{renderDemoList()}</ul>
      </dd>
      <dd>
        <p>상태 메시지(status messages) 배열을 리스트 렌더링합니다.</p>
        {/* 함수 실행 -> 결과 값 반환 (식에서 사용 가능) */}
        {/* <ul className="renderList">{renderList()}</ul> */}
        {/* 인라인 코드 로직 삽입 (식에서 사용 가능, 다만 문 제외) */}
        <ul>
          {items.map((item) => (
            <li key={item.id}>{item.message}</li>
          ))}
        </ul>
      </dd>
      <dd>
        <p>상태 메시지(status messages) 배열을 역순 정렬하여 렌더링합니다.</p>
        {/* 함수 몸체의 변수 참조 (식에서 사용 가능) */}
        {/* <ul className="renderList">{reversedList}</ul> */}

        {/* 인라인 코드 로직 삽입 (식에서 사용 가능, 다만 문 제외) */}
        {items.toReversed().map((item, index) => (
          <li key={item?.id ?? index}>{item.message}</li>
        ))}
      </dd>
      <dd>
        <p>
          React 라이브러리(reactLibrary) 객체의 키, 값을 <q>설명 목록</q>으로
          렌더링합니다.
        </p>
        {renderDefinitionList(reactLibrary)}
      </dd>
    </>
  );
}

export default RenderLists;

RenderLists.propTypes = {
  // items: oneOf(statusMessages)
  items: ItemsType.isRequired, // [권장] arrayOf({ id: string, message: string }) | arrayOf(number)
  reactLibrary: ReactLibraryType.isRequired, // [권장] shape()
};
