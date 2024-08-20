import {
  createNote,
  deleteNote,
  readNoteOne,
  readNotes,
  updateNote,
} from '@/api/notes';
import S from './DataMutation.module.css';
import { useRef } from 'react';

function DataMutation() {

  // 폼 요소에 대한 참조를 저장하는 useRef 훅
  const formRef = useRef(null);

  // 모든 노트 읽기 함수 ---------------------
  const handleReadNotes = async () => {
    // readNotes 함수를 호출하여 모든 노트를 읽어옴
    const responseData = await readNotes();

    // 읽어온 데이터를 콘솔에 출력
    console.log(responseData);
  };


  // 새 노트 생성 함수 ---------------------
  const handleCreate = async () => {
    // 폼 요소에 접근하여 FormData 객체를 생성
    const formElement = formRef.current;
    const formData = new FormData(formElement);

    // 폼 데이터에서 입력 값을 가져옴
    const title = formData.get('title');
    const description = formData.get('description');


    // 새 노트 객체 생성
    const newNote = { title, description };

    // createNote 함수를 호출하여 새 노트를 서버에 전송
    const responseData = await createNote(newNote);

    // 서버 응답 데이터를 콘솔에 출력
    console.log(responseData);

    // 응답이 성공하면 폼을 초기화
    formElement.reset();
  };


  // 특정 ID의 노트 읽기 함수 ---------------------
  const handleReadNoteOne = async () => {
    // readNoteOne 함수를 호출하여 특정 노트의 데이터를 읽어옴
    const responseData = await readNoteOne('i395bxkg0hqg9d1');

    // 읽어온 데이터를 콘솔에 출력
    console.log(responseData);
  };


  // 노트 데이터 수정 함수 ---------------------
  const handleEditNote = async () => {
    // 수정할 노트의 ID와 수정된 내용을 포함하는 객체 생성
    const editNoteId = 'i395bxkg0hqg9d1';
    const editNote = {
      id: editNoteId,
      title: '오늘도 내일도 화이팅! 🥹', // 새 제목
      // description: '리액트 짱 재밌다~?!', // 새로운 설명 (주석 처리됨)
    };

    // updateNote 함수를 호출하여 노트 데이터를 수정
    const responseData = await updateNote(editNote);
    // 서버 응답 데이터를 콘솔에 출력
    console.log(responseData);
  };


  // 노트 데이터 삭제 함수 ---------------------
  const handleDeleteNote = async () => {
    // 삭제할 노트의 ID
    const deleteNoteId = 'i395bxkg0hqg9d1';

    // deleteNote 함수를 호출하여 노트를 삭제
    await deleteNote(deleteNoteId);

    // 삭제 성공 알림 표시
    globalThis.alert('노트 삭제 성공!');
  };


  return (
    <div className={S.component}>
      <form ref={formRef}>
        <div>
          <label htmlFor="noteTitle">제목</label>
          <input type="text" id="noteTitle" name="title" />
        </div>
        <div>
          <label htmlFor="noteDescription">내용</label>
          <textarea
            id="noteDescription"
            name="description"
            cols={20}
            rows={3}
          />
        </div>
      </form>
      <div
        role="group"
        style={{
          marginBlockStart: 20,
          display: 'flex',
          flexFlow: 'column',
          alignItems: 'start',
          gap: 8,
        }}
      >
        <button type="button" onClick={handleCreate}>
          노트 작성
        </button>

        <button type="button" onClick={handleReadNotes}>
          노트 읽기
        </button>

        <button type="button" onClick={handleReadNoteOne}>
          노트 데이터 하나 가져오기
        </button>

        <button type="button" onClick={handleEditNote}>
          노트 데이터 수정하기
        </button>
        
        <button type="button" onClick={handleDeleteNote}>
          노트 데이터 삭제하기
        </button>
      </div>
    </div>
  );
}

export default DataMutation;
