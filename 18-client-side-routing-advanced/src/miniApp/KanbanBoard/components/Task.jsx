import { string } from 'prop-types';
import useKanbanBoardStore from '../@store';
import { TASKS } from '../@types';

// 타입 검사
Task.propTypes = {
  id: string.isRequired,
};

// 상태 색상 클래스 결정 함수
const getColorClassName = (status) => {
  switch (status) {
    case TASKS.planned:
      return 'bg-planned';
    case TASKS.ongoing:
      return 'bg-ongoing';
    case TASKS.done:
      return 'bg-done';
  }
};

// 추가된 작업 다이얼로그 컴포넌트
function Task({ id }) {

  // 작업 데이터 가져오기
  // - useKanbanBoardStore 훅을 사용하여 Kanban 보드의 상태에서 해당 id를 가진 작업을 찾는다.
  const task = useKanbanBoardStore((state) =>
    state.tasks.find((task) => task.id === id)
  );

  // 작업 삭제 함수 가져오기
  // - deleteTask 함수를 Kanban 보드의 상태에서 가져옴
  // - 이 함수는 작업을 삭제하는 데 사용
  const deleteTask = useKanbanBoardStore((state) => state.deleteTask);

  // 작업 삭제 핸들러
  const handleDeleteTask = () => {
    deleteTask(id);
  };

  // 드래그된 작업 설정 함수 가져오기
  // - setDraggedTask 함수를 Kanban 보드의 상태에서 가져옴
  // - 이 함수는 현재 드래그 중인 작업을 설정하는 데 사용
  const setDraggedTask = useKanbanBoardStore((state) => state.setDraggedTask);

  // 삭제 버튼 레이블
  const buttonLabel = `${task.title} 삭제`;


  return (
    <div
      className="hover:cursor-move min-h-[4rem] rounded-md bg-white text-sm shadow-md shadow-slate-400/20 p-4"
      draggable
      // 드래그 시작 시 호출
      // - 드래그 효과를 설정하고 현재 작업을 드래그 중인 작업으로 설정
      onDragStart={(e) => {
        e.dataTransfer.dropEffect = 'move';
        setDraggedTask(id);
      }}
    >
      <h3 className="font-semibold text-base">{task.title}</h3>
      <p>{task.description}</p>
      <div className="flex justify-between mt-4">
        <div>
          <button
            type="button"
            onClick={handleDeleteTask}
            aria-label={buttonLabel}
            title={buttonLabel}
          >
            <svg
              className="w-[16px] h-[16px] text-gray-800 dark:text-white"
              fill="none"
              viewBox="0 0 18 20"
              aria-hidden="true"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M1 5h16M7 8v8m4-8v8M7 1h4a1 1 0 0 1 1 1v3H6V2a1 1 0 0 1 1-1ZM3 5h12v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5Z"
              />
            </svg>
          </button>
        </div>
        <span
          className={`
            uppercase 
            text-xs text-right 
            py-0.5 px-1.5 
            rounded-full
            text-white
            font-semibold
            tracking-wider
            ${getColorClassName(task.status)}
          `}
        >
          {task.status}
        </span>
      </div>
    </div>
  );
}

export default Task;
