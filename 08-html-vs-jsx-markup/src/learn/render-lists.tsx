import { Fragment } from 'react';

interface Props {
  reactLibrary: ReactLibrary;
  items: StatusMessageObject[];
}

function RenderLists({ reactLibrary, items }: Props): JSX.Element {
  let demoListUsingStatement = [];

  for (let item of items) {
    demoListUsingStatement.push(<li key={item.id}>{item.message}</li>);
  }

  const demoList = items.map((item) => {
    return <li key={item.id}>{item.message}</li>;
  });

  const renderDemoList = () =>
    items.map(({ id, message }) => {
      return <li key={id}>{message}</li>;
    });

  const renderDefinitionList = (objectData: ReactLibrary) => {
    const definitionItems = Object.entries(objectData).map(([key, value]) => {
      return (
        <Fragment key={key}>
          <dt>{key}</dt>
          <dd>{value}</dd>
        </Fragment>
      );
    });

    return <dl className="reactLibrary">{definitionItems}</dl>;
  };

  return (
    <>
      <dt>리스트 렌더링(list rendering)</dt>
      <dd>
        <ul>
          {items.map(({ id, message }) => {
            return <li key={id}>{message}</li>;
          })}
        </ul>
        <ul>{demoListUsingStatement}</ul>
        <ul>{demoList}</ul>
        <ul>{renderDemoList()}</ul>
      </dd>
      <dd>
        <p>상태 메시지(status messages) 배열을 리스트 렌더링합니다.</p>
        <ul>
          {items.map((item) => (
            <li key={item.id}>{item.message}</li>
          ))}
        </ul>
      </dd>
      <dd>
        <p>상태 메시지(status messages) 배열을 역순 정렬하여 렌더링합니다.</p>

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
