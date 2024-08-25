import { memo } from 'react';
import { bool, node, string } from 'prop-types';
import clsx from 'clsx';

AppLink.propTypes = {
  href: string.isRequired,
  children: node.isRequired,
  isExternal: bool,
  className: string,
};

function AppLink({
  href,
  children,
  isExternal = false,
  className,
  ...restProps
}) {
  // 조건에 따라 동적으로 속성을 추가하는 데 사용
  const externalProps = {};

  // isExternal 속성이 true인 경우에만 링크를 외부에서 열 수 있도록 구성
  if (isExternal) {
    externalProps.target = '_blank'; // 링크를 새 탭에서 열도록 지정
    externalProps.rel = 'noreferrer noopener'; // 새 탭에서 링크를 열 때의 보안과 성능 문제를 방지
    // - noopener: 새 탭에서 열린 페이지가 원래 페이지의 window.opener 속성에 접근하지 못하도록 함 -> 보안 취약점을 방지
    // - noreferrer: 새 탭에서 열린 페이지가 원래 페이지의 URL 정보를 참조하지 못하도록 함 -> 개인정보 보호
  }

  return (
    <a
      href={href}
      className={clsx('text-indigo-500 hover:text-accent', className)}
      {...externalProps}
      // 부모 컴포넌트에서 전달된 추가적인 props
      {...restProps}
      >
      {/* 컴포넌트가 렌더링할 자식 요소 
          - 부모 컴포넌트가 AppLink에 포함된 콘텐츠를 전달할 때 사용 
          => "Zustand" */}
      {children}
    </a>
  );
}

export default memo(AppLink);
