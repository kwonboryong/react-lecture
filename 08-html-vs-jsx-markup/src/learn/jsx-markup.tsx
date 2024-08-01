import DataBinding from './data-binding';
import ConditionalRendering from './conditional-rendering';
import ConditionalDisplay from './conditional-display';
import RenderLists from './render-lists';
import * as learnData from '../data/learn';

function JSX_Markup(): JSX.Element {
  let {
    reactLibrary,
    statusMessages,
    statusMessagesWithID,
    imageType,
    isShowReactImage,
  } = learnData;

  return (
    <dl className="descriptionList">
      <DataBinding statusMessages={statusMessages as StatusMessage[]} />
      <ConditionalRendering imageType={imageType} />
      <ConditionalDisplay isShowImage={isShowReactImage} />
      <RenderLists reactLibrary={reactLibrary} items={statusMessagesWithID} />
    </dl>
  );
}

export default JSX_Markup;
