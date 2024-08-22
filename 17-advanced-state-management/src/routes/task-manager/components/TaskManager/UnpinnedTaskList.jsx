import { PiPushPinFill, PiPushPinLight } from 'react-icons/pi';
import { RxCross1 } from 'react-icons/rx';
import { useTask } from './@context';

function UnpinnedTaskList() {
  const {
    unpinnedTaskList,
    methods: { setTask, togglePin, deleteTask },
  } = useTask();

  const handleSetTask = (taskId, isCompleted) => {
    setTask(taskId, isCompleted);
  };

  const handleTogglePin = (taskId) => {
    togglePin(taskId);
  };

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
      {unpinnedTaskList.map((task) => (
        <li key={task.id} style={{ display: 'flex', gap: 6 }}>
          <label
            style={{ textDecoration: task.isCompleted ? 'line-through' : null }}
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
          <button type="button" onClick={() => handleDeleteTask(task.id)}>
            <RxCross1 />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default UnpinnedTaskList;
