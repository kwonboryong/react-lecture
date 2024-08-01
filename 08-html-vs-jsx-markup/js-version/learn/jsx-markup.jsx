import DataBinding from './data-binding';
import ConditionalRendering from './conditional-rendering';
import ConditionalDisplay from './conditional-display';
import RenderLists from './render-lists';
import * as learnData from '../data/learn';

function JSX_Markup() {
  // 부모(상위) 컴포넌트가 자식(하위) 컴포넌트에 데이터를 전달할 수 있을까?
  // 리액트 월드에서는 위에서 아래로 데이터를 전달할 수 있는데 그 데이터를 [ props ]라 부르기로 했다.
  // 이것이 컴포넌트의 속성(Properties, props)이다.

  // learnData 구조 분해 할당
  let {
    reactLibrary,
    statusMessages,
    statusMessagesWithID,
    imageType,
    isShowReactImage,
  } = learnData;

  return (
    <dl className="descriptionList">
      {/* {React.createElement(DataBinding, { statusMessages: statusMessages })} */}
      {/* <DataBinding statusMessages={['hi', 'react', 'prop-types']} /> */}
      <DataBinding statusMessages={statusMessages} />
      <ConditionalRendering imageType={imageType} />
      {/* <ConditionalDisplay /> */}
      <ConditionalDisplay isShowImage={isShowReactImage} />
      <RenderLists reactLibrary={reactLibrary} items={statusMessagesWithID} />
    </dl>
  );
}

export default JSX_Markup;
