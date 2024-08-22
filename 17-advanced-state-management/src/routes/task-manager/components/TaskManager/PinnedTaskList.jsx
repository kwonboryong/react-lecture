import { PiPushPinFill, PiPushPinLight } from 'react-icons/pi';
import { useTask } from './@context';

function PinnedTaskList() {
  const {
    pinnedTaskList,
    methods: { togglePin, setTask },
  } = useTask();

  const handleSetTask = (taskId, isCompleted) => {
    setTask(taskId, isCompleted);
  };

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
      {pinnedTaskList.map((task) => {
        return (
          <li key={task.id} style={{ display: 'flex', gap: 6 }}>
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
              />{' '}
              {task.content}
            </label>
            <button type="button" onClick={() => handleTogglePin(task.id)}>
              {task.isPin ? <PiPushPinFill /> : <PiPushPinLight />}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default PinnedTaskList;
