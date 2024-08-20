// 클라이언트 측 API 함수 작성
// 생성
// 읽기
// 수정
// 삭제

// 2. 백엔드 API 엔드포인트
const ENDPOINT = 'http://127.0.0.1:8090';

// 5-1. 옵션 설정
const REQUEST_OPTIONS = {
  headers: {
    'Content-Type': 'application/json',
  },
};

// 1. 비동기 함수 작성
/** @type {(newNote: { title: string, description: string }) => Promise<any> } */
export async function createNote(newNote) {
  
  // 3. 외부 시스템(서버)에 데이터 생성 요청
  // - POST 요청 URL
  const REQUEST_URL = `${ENDPOINT}/api/collections/notes/records`;

  // 4. POST 요청 시 전송할 JSON 포맷 문자열
  const body = JSON.stringify({
    title: newNote.title,
    description: newNote.description,
  });

  // 5. 서버에서 응답
  const response = await fetch(REQUEST_URL, {
    method: 'POST',
    body,
    ...REQUEST_OPTIONS,
  });


  // 6. 에러 핸들링
  if (!response.ok) {
    throw new Response(
      JSON.stringify({ message: '서버에서 요청에 응답하지 않습니다.' }),
      { status: 500 }
    );
  }

  const responseData = await response.json();

  return responseData;
}


/** @type {(page?: number, perPage?: number) => Promise<any>} */
export async function readNotes(page = 1, perPage = 10) {

  // 서버에 GET 요청을 보낼 URL
  // 페이지와 페이지당 항목 수를 쿼리 스트링으로 포함
  const REQUEST_URL = `${ENDPOINT}/api/collections/notes/records?page=${page}&perPage=${perPage}`;

  // 서버에 GET 요청을 보내서 데이터를 가져옴
  const response = await fetch(REQUEST_URL);

  // 서버 응답이 실패한 경우 에러 처리
  if (!response.ok) {
    // 에러 메시지를 포함한 Response 객체를 생성하고 던짐
    throw new Response(
      JSON.stringify({ message: '서버에서 요청에 응답하지 않습니다.' }),
      { status: 500 }  // HTTP 상태 코드 500 (서버 오류)
    );
  }

  // 서버 응답 데이터를 JSON 형식으로 파싱
  const responseData = await response.json();

  // 파싱된 데이터를 반환
  return responseData;
}


/** @type {(noteId: string) => Promise<any>} */
export async function readNoteOne(noteId) {

  // 서버에 요청할 URL
  // noteId를 경로 파라미터로 사용하여 특정 노트를 조회
  const REQUEST_URL = `${ENDPOINT}/api/collections/notes/records/${noteId}`;

  // 서버에 GET 요청을 보내서 해당 ID의 노트를 가져옴
  const response = await fetch(REQUEST_URL);

  // 서버 응답이 실패한 경우 에러 처리
  if (!response.ok) {
    // 에러 메시지를 포함한 Response 객체를 생성하고 던짐
    throw new Response(
      JSON.stringify({ message: '서버에서 요청에 응답하지 않습니다.' }), // 커스텀 에러 메시지
      { status: 500 }  // HTTP 상태 코드 500 (서버 오류)
    );
  }

  // 서버 응답 데이터를 JSON 형식으로 파싱
  const responseData = await response.json();

  // 파싱된 데이터를 반환 (특정 노트의 데이터)
  return responseData;
}


/** @type { (editNote: { id: string, title: string, description: string }) => Promise<any>} */
export async function updateNote(editNote) {
  // 서버에 PATCH 요청을 보낼 URL. 수정할 노트의 ID를 경로에 포함.
  const REQUEST_URL = `${ENDPOINT}/api/collections/notes/records/${editNote.id}`;

  // 요청 본문을 JSON 형식으로 변환 (수정된 title과 description 포함)
  const body = JSON.stringify({
    title: editNote.title,            // 수정할 노트의 제목
    description: editNote.description, // 수정할 노트의 설명
  });

  // 서버에 PATCH 요청을 보내서 노트 데이터를 수정
  const response = await fetch(REQUEST_URL, {
    method: 'PATCH',    // 데이터를 수정하기 위한 PATCH 메서드 사용
    body,               // JSON으로 변환한 수정된 데이터를 요청 본문에 포함
    ...REQUEST_OPTIONS, // 헤더 정보 포함 (JSON 형식 설정)
  });

  // 서버 응답이 실패한 경우 에러 처리
  if (!response.ok) {
    // 에러 메시지를 포함한 Response 객체를 생성하고 던짐
    throw new Response(
      JSON.stringify({ message: '서버에서 요청에 응답하지 않습니다.' }),
      { status: 500 }  // HTTP 상태 코드 500 (서버 오류)
    );
  }

  // 서버 응답 데이터를 JSON 형식으로 파싱
  const responseData = await response.json();

  // 파싱된 데이터를 반환 (수정된 노트의 데이터)
  return responseData;
}


/** @type { (deleteId: string) => Promise<any> } */
export async function deleteNote(deleteId) {

  // 서버에 DELETE 요청을 보낼 URL
  // - 삭제할 노트의 ID를 경로에 포함
  const REQUEST_URL = `${ENDPOINT}/api/collections/notes/records/${deleteId}`;

  // 서버에 DELETE 요청을 보내서 해당 ID의 노트를 삭제
  const response = await fetch(REQUEST_URL, {
    method: 'DELETE',    // 데이터를 삭제하기 위한 DELETE 메서드 사용
    ...REQUEST_OPTIONS,  // 헤더 정보 포함 (JSON 형식 설정)
  });

  // 서버 응답이 실패한 경우 에러 처리
  if (!response.ok) {
    // 에러 메시지를 포함한 Response 객체를 생성하고 던짐
    throw new Response(
      JSON.stringify({ message: '서버에서 요청에 응답하지 않습니다.' }), // 커스텀 에러 메시지
      { status: 500 }  // HTTP 상태 코드 500 (서버 오류)
    );
  }

  // 응답 객체를 반환 (삭제된 항목의 상태를 확인하기 위한 용도)
  return response;
}
