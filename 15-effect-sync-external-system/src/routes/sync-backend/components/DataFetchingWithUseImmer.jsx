import { useEffect } from 'react';
import { useImmer } from 'use-immer';
import { exact, string } from 'prop-types';
import S from './DataFetching.module.css';

// 1. API 주소 정의
const ENDPOINT = '//yamoo9.pockethost.io/api/collections/olive_oil/records';

function DataFetching() {
  // 2. API 요청의 상태를 관리하는 객체 정의
  // - isLoading: 데이터가 로딩 중인지 여부
  // - error: 요청 중 발생한 오류
  // - data: API로부터 받아온 데이터
  const [state, setState] = useImmer({
    isLoading: false,
    error: null,
    data: null,
  });

  useEffect(() => {
    // 3. AbortController 인스턴스 생성
    // - 네트워크 요청을 취소할 수 있게 해줍니다.
    const abortController = new AbortController();

    // 4. isLoading 상태를 true로 설정하여 데이터 로딩 중임을 나타냄
    setState((draft) => {
      draft.isLoading = true;
    });

    // 5. 비동기로 데이터를 가져오는 함수 정의
    async function fetchOliveOil() {
      try {
        // 6. API 엔드포인트로부터 데이터를 가져옴
        // - AbortController의 signal을 설정하여 요청을 취소할 수 있도록 함
        const response = await fetch(ENDPOINT, {
          signal: abortController.signal,
        });

        // 7. 응답 본문을 JSON 객체로 변환
        const responseData = await response.json();

        // 8. 응답이 정상적이지 않으면 오류 발생
        if (!response.ok) {
          throw new Error(responseData.message);
        }

        // 9. 응답 데이터와 로딩 상태 업데이트
        // - data 상태에 응답 데이터를 설정하고, isLoading을 false로 업데이트
        setState((draft) => {
          draft.data = responseData;
          draft.isLoading = false;
        });

      } catch (error) {
        // 10. AbortController의 signal로 인해 발생할 수 있는 DOMException을 제외한 나머지 오류 처리
        if (!(error instanceof DOMException)) {
          // 11. 오류 상태와 로딩 상태 업데이트
          // - error 상태에 오류를 저장하고, isLoading을 false로 설정
          setState((draft) => {
            draft.error = error;
            draft.isLoading = false;
          });
        }
      }
    }

    // 12. 데이터 패칭 함수 호출
    fetchOliveOil();

    // 13. 컴포넌트 언마운트 시 fetch 요청을 중단하는 클린업 함수 반환
    return () => {
      abortController.abort();
    };

  }, [setState]); // 14. useEffect의 의존성 배열에 setState를 추가하여 상태 업데이트 함수가 변경될 때마다 useEffect가 재실행되도록 함

  // 15. 조건부 렌더링
  if (state.isLoading) {
    // 16. 데이터가 로딩 중일 때 로딩 중 메시지 컴포넌트 렌더링
    return <LoadingMessage />;
  }

  if (state.error) {
    // 17. 오류가 발생했을 때 오류 메시지 컴포넌트 렌더링
    return <PrintError error={state.error} />;
  }

  // 18. 데이터가 정상적으로 로딩되었을 때, 데이터 항목을 리스트로 렌더링
  return (
    <div className={S.component}>
      <ul>
        {state.data?.items.map?.((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

/* ----------------------------------------------- */

// 19. 로딩 중 메시지 컴포넌트 정의
function LoadingMessage() {
  return <p>데이터 로딩 중...</p>;
}

// 20. 오류 메시지 컴포넌트와 타입 검사
PrintError.propTypes = {
  error: exact({
    message: string.isRequired,
  }).isRequired,
};

// 21. 오류 메시지 컴포넌트 정의
function PrintError({ error }) {
  return (
    <p role="alert">
      오류 발생!{' '}
      <span style={{ fontWeight: 500, color: 'red' }}>{error.message}</span>
    </p>
  );
}

export default DataFetching;
