// --------------------------------------------------------------------------
// ✅ 스크롤 애니메이션
// --------------------------------------------------------------------------
// - [x] 대상 요소의 스크롤 위치에 따라 프로그래스바 scaleX 값이 애니메이션 되도록 설정합니다.
// - [x] 대상 요소의 스크롤 위치에 따라 아웃풋 텍스트 콘텐츠 값이 %로 출력되도록 설정합니다.
// --------------------------------------------------------------------------
import { useRef } from 'react';
import { scroll } from 'motion';
import { oneOf, string } from 'prop-types';
import S from './Progress.module.css';

// 타입 검사
ProgressBar.propTypes = {
  containerSelector: string,
  axis: oneOf(['x', 'y']),
};

function ProgressBar({ containerSelector = null, axis = 'y' }) {
  // containerSelector: 스크롤 이벤트를 감지할 컨테이너를 선택하기 위한 CSS 선택자
  // axis: 수직 스크롤

  // 진행률 바의 DOM 요소를 참조
  const progressBarRef = useRef(null);

  // 진행률 값(%)을 표시하는 output 요소를 참조
  const outputRef = useRef(null);


  // 진행률 바를 설정하고 업데이트하기 위한 함수
  // - 사용자 액션 이벤트 X
  // - 마운트 시점에 실행될 콜백 함수 : ref callback
  const setProgressBar = () => {
    // DOM에서 스크롤을 감지할 컨테이너를 선택
    const container = document.querySelector(containerSelector);

    // 스크롤 애니메이션에 필요한 옵션
    const scrollOptions = { container, axis };

    // 스크롤 애니메이션
    scroll(({ y: { progress } }) => {
      // 현재 스크롤 위치에 대한 진행률을 인자로 받음

      // 실제 DOM 요소를 참조
      const progressBar = progressBarRef.current;
      const output = outputRef.current;

      // progressBar와 output이 존재할 경우에만 다음 작업을 수행
      if (progressBar && output) {
        // 진행률 바의 너비 조절
        progressBarRef.current.style.transform = `scaleX(${progress})`;
        
        // output의 값을 현재 스크롤의 진행률(퍼센트)로 설정
        output.value = (progress * 100).toFixed(0) + '%';
      }
    }, scrollOptions);
  };

  return (
    // div가 마운트될 때, setProgressBar 함수가 호출됨
    <div ref={setProgressBar}>
      <div ref={progressBarRef} className={S.progress} />
      <output ref={outputRef} className={S.output}>
        0%
      </output>
    </div>
  );
}

export default ProgressBar;
