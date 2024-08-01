/* eslint-disable no-unused-vars */
import { bool } from 'prop-types';

function ConditionalDisplay({ isShowImage = true }) {
  // 조건부 렌더링
  // - JavaScript 로직
  // - if 문
  // - switch 문
  // - 3항 연산자 식
  // - 논리 연산자 식
  // - 함수 실행 반환된 결과 값

  // 조건부 표시
  // - CSS 스타일: `display` 속성 사용
  // - className 또는 style 속성 활용
  // - HTML 요소 hidden 속성 활용

  const pictureClassNames = `Picture ${isShowImage ? '' : 'hidden'}`.trim();
  // console.log(pictureClassNames);

  const pictureStyles = {
    display: isShowImage ? 'inline-block' : 'none',
    fontSize: 42,
    lineHeight: 2.4,
    letterSpacing: '2px',
  };
  // console.log(pictureStyles);

  return (
    <>
      <dt>조건부 표시(conditional display)</dt>
      <dd>
        <p>
          표시(display) 여부에 따라 이미지가 화면에서 감춰지거나 표시됩니다.
        </p>
        {/* isShowReactImage 상태 값에 따라 이미지가 화면에 표시되거나 표시되지 않도록 설정합니다. */}
        <picture
          // HTML 요소 hidden 속성
          hidden={!isShowImage}

          // class 속성
          // className={pictureClassNames}

          // style 속성
          // style="html에서는 style 속성에 문자 값을 사용"
          // style="display: block"
          // JSX에서는 스타일 객체(맵) 표기법을 활용
          // style={pictureStyles}
          // style={{
          //   display: isShowImage ? 'inline-block' : 'none',
          //   fontSize: 42,
          //   lineHeight: 2.4,
          //   'letter-spacing': '2px',
          // }}
        >
          <source type="image/avif" srcSet="/react/react.avif" />
          <source type="image/webp" srcSet="/react/react.webp" />
          <img src="/react/react.png" alt="React" height={42} />
        </picture>
      </dd>
    </>
  );
}

export default ConditionalDisplay;

ConditionalDisplay.propTypes = {
  isShowImage: bool,
  // 사용자가 직접 컴포넌트 속성 검사 코드
  // isShowImage(props, propName, componentName) {
  //   const propValue = props[propName];
  //   const propType = typeOf(propValue);
  //   const allowedType = 'boolean';

  //   if (propType !== allowedType) {
  //     throw new Error(
  //       `${componentName} 컴포넌트 ${propName} 속성 타입은 "${allowedType}" 타입이 요구되나, 실제 전달된 타입은 "${propType}"입니다.`
  //     );
  //   }
  // },
};
