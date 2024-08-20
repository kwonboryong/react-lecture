// [목적]
// 리액트 렌더링 프로세스(동기)와 관련 없는 사이드 이펙트(비동기) 처리
// 네트워크 요청/응답 처리하기 위한 상태
// - 상황(status) 상태
// - 오류(error) 유무 상태
// - 데이터(data) 유무 상태

// import { useState } from "react";
import { useEffect } from 'react';
import { useImmer } from 'use-immer';

// [기능]
// - 비동기 요청/응답
// - 응답 상황에 따른 상태 반환
// - 개발 중(StrictMode) 2회 렌더링 되는 문제(순수성 검사) 해결 (중복 요청 취소)

// [사용법]
// const { status, error, data } = useFetch(url);
// if (status === 'pending' | 'loading' | 'success' | 'error') { ... }
// if (error || status === 'error') { ... }
// if (status === 'success' || data) { ... }

/** @type {(url: string) => { status: 'pending' | 'loading' | 'success' | 'error', error: null | Error, data }} */
function useFetch(url) {
  // 1. 상태 선언
  const [state, setState] = useImmer({
    status: 'pending',
    error: null,
    data: null,
  });

  // 2. 이펙트 처리
  useEffect(() => {
    // 요청을 취소할 수 있고, 신호를 제공할 수 있는 객체 생성
    const abortController = new AbortController();

    // 상태 업데이트 (대기 -> 로딩 중...)
    setState((draft) => {
      draft.status = 'loading';
    });

    // 이펙트 내부의 비동기 함수
    const fetchData = async () => {
      try {
        // 요청 / 응답
        const response = await fetch(url, {
          signal: abortController.signal,
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        // 응답이 실패한 경우
        // catch(error) 블록으로 응답
        if (!response.ok) {
          throw new Response(
            { message: '서버 응답이 실패했습니다.' },
            { status: 500 }
          );
        }

        // 응답 결과에서 JSON 데이터로 변환
        const responseData = await response.json();

        // 응답이 성공한 경우
        // 상태 업데이트 (로딩 중... -> 성공)
        setState((draft) => {
          draft.status = 'success';
          draft.data = responseData;
        });
      } catch (error) {
        if (!(error instanceof DOMException)) {
          // 응답이 실패한 경우
          // 상태 업데이트 (로딩 중... -> 실패)
          setState((draft) => {
            draft.status = 'error';
            draft.error = error;
          });
        }
      }
    };

    // 이펙트 함수 실행
    fetchData();

    // 정리
    return () => {
      // 중복 요청인 경우, 요청 취소
      abortController.abort();
    };
  }, [url, setState]);

  // 3. 반환 값
  // { status, error, data }
  return state;
}

export default useFetch;
