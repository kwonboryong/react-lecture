import { isTrueOrFalse } from '../utils';
import kakaoTalkImagePath from '../assets/kakao-talk.svg?url';
import nextJsImagePath from '../assets/next-js.svg?url';
import reactImagePath from '../assets/react.svg?url';
import viteImagePath from '../assets/vite.svg?url';

interface Props {
  imageType: ImageType;
}

function ConditionalRendering({ imageType }: Props): JSX.Element {
  let imagePath = '';
  let printText = '';

  switch (imageType.toLowerCase()) {
    case 'react':
      imagePath = reactImagePath;
      printText = 'React';
      break;
    case 'vite':
      imagePath = viteImagePath;
      printText = 'Vite';
      break;
    case 'next.js':
      imagePath = nextJsImagePath;
      printText = 'Next.js';
      break;
    case 'kakao talk':
      imagePath = kakaoTalkImagePath;
      printText = 'Kakao Talk';
      break;
    default:
      printText = '허용된 이미지 타입이 존재하지 않습니다.';
  }

  const spinnerOrVite = isTrueOrFalse() ? (
    <img className="spinner" src="/icons/spinner.svg" alt="로딩 중..." />
  ) : (
    <img src="/vite.svg" alt="Vite" style={{ height: 42 }} />
  );

  return (
    <>
      <dt>
        조건부 렌더링(conditional rendering) ({isTrueOrFalse() && '스피너 표시'}
        )
      </dt>
      <dd>
        <p>이미지 타입(image type)에 따라 렌더링 여부를 결정합니다.</p>
        <div className="conditionalRendering">
          <img src={imagePath} alt="" />
          <p>{printText}</p>
        </div>
      </dd>
      <dd style={{ marginTop: 12 }}>
        <p>spinner 또는 vite 이미지가 랜덤으로 화면에 렌더링 되도록 합니다.</p>
        <div className="conditionalRendering">{spinnerOrVite}</div>
      </dd>
    </>
  );
}

export default ConditionalRendering;
