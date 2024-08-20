import useRenderCount from './useRenderCount';

function useRenderCountLog(componentName, cssStyles = '') {
  const renderCount = useRenderCount();

  console.log(
    `%c${componentName} 컴포넌트 렌더 횟수 = ${renderCount}`,
    `font-size: 14px; font-weight: 500; color: #999; ${cssStyles}`
  );
}

export default useRenderCountLog;
