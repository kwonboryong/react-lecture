import { PiPushPinFill, PiPushPinLight } from 'react-icons/pi';
import { useTask } from './@context';

function PinnedTaskList() {
  // TaskProvider에서 제공하는 컨텍스트 훅을 사용하여 
  // 핀으로 고정된 작업 목록과 관련 메서드를 가져옴
  const {
    pinnedTaskList,
    methods: { togglePin, setTask },
  } = useTask();


  // @reducer -> taskContext -> useTask의 contextValue -> PinnedTaskList까지 도달
  
  // 작업의 완료 상태를 업데이트하는 함수
  const handleSetTask = (taskId, isCompleted) => {
    setTask(taskId, isCompleted);
  };

  // 작업의 핀 상태를 토글하는 함수
  const handleTogglePin = (taskId) => {
    togglePin(taskId);
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
      {/* pinnedTaskList 배열을 순회하여 목록 렌더링 */}
      {pinnedTaskList.map((task) => {
        return (
          <li key={task.id} className="flex justify-between gap-1.5">
            <label
              style={{
                textDecoration: task.isCompleted ? 'line-through' : null,
                fontSize: 24,
              }}
            >
              <input
                type="checkbox"
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
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default PinnedTaskList;
