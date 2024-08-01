interface Props {
  isShowImage?: boolean;
}

function ConditionalDisplay({ isShowImage = true }: Props): JSX.Element {
  return (
    <>
      <dt>조건부 표시(conditional display)</dt>
      <dd>
        <p>
          표시(display) 여부에 따라 이미지가 화면에서 감춰지거나 표시됩니다.
        </p>
        <picture hidden={!isShowImage}>
          <source type="image/avif" srcSet="/react/react.avif" />
          <source type="image/webp" srcSet="/react/react.webp" />
          <img src="/react/react.png" alt="React" height={42} />
        </picture>
      </dd>
    </>
  );
}

export default ConditionalDisplay;
