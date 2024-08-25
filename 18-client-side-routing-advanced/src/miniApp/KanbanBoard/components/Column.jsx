import { useRef, useState } from 'react';

import { debounce } from '@/utils/debounce';
import useKanbanBoardStore from '../@store';
import { TASKS, taskTypes } from '../@types';
import Dialog from './Dialog';
import Task from './Task';

//  타입 검사
Column.propTypes = {
  status: taskTypes,
};

// 작업 추가 시 초기 입력값을 정의하는 객체
const initialInputContents = {
  title: '',
  description: '',
};

// 상태에 따라 열의 제목과 색상 클래스를 반환
const getStatusTitleAndColor = (status) => {
  switch (status) {
    case TASKS.planned:
      return ['계획', 'text-planned'];
    case TASKS.ongoing:
      return ['진행중', 'text-ongoing'];
    case TASKS.done:
      return ['완료', 'text-done'];
  }
};

// 작업 상태 파트 컴포넌트(계획 / 진행중 / 완료)
function Column({ status }) {
  
  // 작업 목록 필터링
  const tasks = useKanbanBoardStore((state) =>
    state.tasks.filter((task) => task.status === status)
  );

  // 드래그 중인 작업을 설정하는 함수
  const setDraggedTask = useKanbanBoardStore((state) => state.setDraggedTask);
  // 현재 드래그 중인 작업
  const draggedTask = useKanbanBoardStore((state) => state.draggedTask);
  // 작업을 다른 열로 이동시키는 함수
  const moveTask = useKanbanBoardStore((state) => state.moveTask);
  // 새로운 작업을 추가하는 함수
  const addTask = useKanbanBoardStore((state) => state.addTask);

  // 작업 상태 아이콘 변경
  // - 열 제목 및 색상 클래스 가져오기
  const [title, colorClassName] = getStatusTitleAndColor(status);

  // 다이얼로그 상태 관리(작업 메시지)
  // 작업 추가 다이얼로그의 참조를 저장
  const dialogRef = useRef();
  // 다이얼로그의 열림 상태 관리
  const [open, setOpen] = useState(false);
  // 드래그 상태 관리
  const [drag, setDrag] = useState(false);
  // 작업 추가 입력 필드의 상태를 관리
  const [inputContents, setInputContents] = useState(initialInputContents);

  // 다이얼로그 열기 핸들러
  // - 다이얼로그를 열고, 상태를 업데이트하여 열림 상태를 관리
  const handleOpen = () => {
    dialogRef.current.showModal();
    setOpen(true);
  };

  // 다이얼로그 닫기 핸들러
  // - 다이얼로그를 닫고, 상태를 업데이트하여 닫힘 상태를 관리
  const handleClose = () => {
    dialogRef.current.close();
    setOpen(false);
  };

  // 입력 필드 값 변경 핸들러
  // - 입력 필드의 값을 디바운스(debounce) 처리하여 상태를 업데이트
  // - 입력 필드의 name 속성에 따라 inputContents를 업데이트
  const handleInputContent = debounce(({ target }) =>
    setInputContents({
      ...inputContents,
      [target.name]: target.value,
    })
  );

  // 작업 저장 핸들러
  // - 폼 제출 시 호출
  // 1. inputContents를 사용해 새로운 작업을 추가
  // 2. 입력 필드를 초기화
  // 3. 다이얼로그를 닫기
  const handleSaveTask = (e) => {
    e.preventDefault();
    addTask(inputContents.title, inputContents.description, status);
    setInputContents(initialInputContents);
    handleClose();
  };

  return (
    <>
      <article
        // 드래그 중일 때의 이벤트 처리
        // - 드래그 가능 상태로 설정하고 setDrag(true)로 상태를 업데이트
        onDragOver={(e) => {
          e.dataTransfer.dropEffect = 'move';
          e.preventDefault();
          setDrag(true);
        }}
        // 드래그가 열에서 떠날 때의 이벤트 처리
        // - 드래그 효과를 제거하고 setDrag(false)로 상태를 업데이트
        onDragLeave={(e) => {
          e.dataTransfer.dropEffect = 'none';
          e.preventDefault();
          setDrag(false);
        }}
        // 드래그한 작업을 열에 드롭할 때의 이벤트 처리
        // - 작업을 이동시키고, 드래그 상태를 초기화한다.
        onDrop={() => {
          moveTask(draggedTask.id, status);
          setDraggedTask(null);
          setDrag(false);
        }}
        className={`
          border-8 h-[inherit] bg-indigo-50/5 text-slate-700 flex-1 flex flex-col gap-4 p-5
          transition-all duration-200 
          ${drag ? 'border-slate-300 border-dashed' : ''}`.trim()}
      >
        <div className="flex justify-between items-center mb-2">
          <h2 className={`text-xl font-medium ${colorClassName}`}>
            {title} ({tasks.length})
          </h2>
          <button
            type="button"
            aria-label={`${title} 추가`}
            title={`${title} 추가`}
            onClick={handleOpen}
            className="text-xl font-bold leading-[0] p-0 bg-slate-50/60 w-8 h-8 rounded-full grid place-content-center shadow-md hover:bg-white transition-colors duration-200"
          >
            +
          </button>
        </div>

        {tasks.map((task) => (
          <Task key={task.id} id={task.id} />
        ))}
      </article>

      <Dialog
        key={status}
        forwardRef={dialogRef}
        open={open}
        label={title}
        state={inputContents}
        color={colorClassName}
        onInput={handleInputContent}
        onSave={handleSaveTask}
        onClose={handleClose}
      />
    </>
  );
}

export default Column;
