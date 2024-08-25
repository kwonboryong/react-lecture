import { PiPushPinFill, PiPushPinLight } from 'react-icons/pi';
import { RxCross1 } from 'react-icons/rx';
import { useTask } from './@context';
import clsx from 'clsx';

function UnpinnedTaskList() {
  // TaskProvider에서 제공하는 컨텍스트 훅을 사용하여 
  // 핀으로 고정되지 않은 작업 목록과 관련 메서드를 가져옴
  const {
    unpinnedTaskList,
    methods: { setTask, togglePin, deleteTask },
  } = useTask();


  // 작업의 완료 상태 업데이트
  const handleSetTask = (taskId, isCompleted) => {
    setTask(taskId, isCompleted);
  };

  // 작업의 핀 상태 토글
  const handleTogglePin = (taskId) => {
    togglePin(taskId);
  };

  // 작업 삭제
  const handleDeleteTask = (deleteId) => {
    deleteTask(deleteId);
  };


  return (
    <ul
      style={{
        display: 'flex',
        flexFlow: 'column',
        paddingInlineStart: 0,
        gap: 6,
      }}
    >
      {/* unpinnedTaskList 배열을 순회하여 목록 렌더링 */}
      {unpinnedTaskList.map((task) => (
        <li key={task.id} className="flex justify-between gap-1.5">
          <label
            className={clsx('flex gap-1', task.isCompleted && 'line-through')}
          >
            <input
              type="checkbox"
              className="accent-accent"
              defaultChecked={task.isCompleted}
              onChange={(e) => handleSetTask(task.id, e.target.checked)}
              // 체크박스를 클릭하여 상태를 변경하면 onChange 이벤트 발생
            />{' '}
            {task.content}
          </label>

          <div className="flex gap-2">
            <button type="button" onClick={() => handleTogglePin(task.id)}>
              {task.isPin ? <PiPushPinFill /> : <PiPushPinLight />}
            </button>

            <button type="button" onClick={() => handleDeleteTask(task.id)}>
              <RxCross1 />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default UnpinnedTaskList;
