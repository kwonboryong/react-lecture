import { string } from 'prop-types';
import useKanbanBoardStore from '../@store';
import { TASKS } from '../@types';

function Task({ id }) {
  const task = useKanbanBoardStore((state) =>
    state.tasks.find((task) => task.id === id)
  );

  const deleteTask = useKanbanBoardStore((state) => state.deleteTask);

  const handleDeleteTask = () => {
    deleteTask(id);
  };

  const setDraggedTask = useKanbanBoardStore((state) => state.setDraggedTask);

  const buttonLabel = `${task.title} 삭제`;

  return (
    <div
      className="hover:cursor-move min-h-[4rem] rounded-md bg-white text-sm shadow-md shadow-slate-400/20 p-4"
      draggable
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

Task.propTypes = {
  id: string.isRequired,
};

export default Task;
