import { useRef, useState } from 'react';

import { debounce } from '@/utils/debounce';
import useKanbanBoardStore from '../@store';
import { TASKS, taskTypes } from '../@types';
import Dialog from './Dialog';
import Task from './Task';

const initialInputContents = {
  title: '',
  description: '',
};

function Column({ status }) {
  const tasks = useKanbanBoardStore((state) =>
    state.tasks.filter((task) => task.status === status)
  );

  const setDraggedTask = useKanbanBoardStore((state) => state.setDraggedTask);
  const draggedTask = useKanbanBoardStore((state) => state.draggedTask);
  const moveTask = useKanbanBoardStore((state) => state.moveTask);

  const addTask = useKanbanBoardStore((state) => state.addTask);

  const [title, colorClassName] = getStatusTitleAndColor(status);

  const dialogRef = useRef();
  const [open, setOpen] = useState(false);
  const [drag, setDrag] = useState(false);
  const [inputContents, setInputContents] = useState(initialInputContents);

  const handleOpen = () => {
    dialogRef.current.showModal();
    setOpen(true);
  };

  const handleClose = () => {
    dialogRef.current.close();
    setOpen(false);
  };

  const handleInputContent = debounce(({ target }) =>
    setInputContents({
      ...inputContents,
      [target.name]: target.value,
    })
  );

  const handleSaveTask = (e) => {
    e.preventDefault();
    addTask(inputContents.title, inputContents.description, status);
    setInputContents(initialInputContents);
    handleClose();
  };

  return (
    <>
      <article
        onDragOver={(e) => {
          e.dataTransfer.dropEffect = 'move';
          e.preventDefault();
          setDrag(true);
        }}
        onDragLeave={(e) => {
          e.dataTransfer.dropEffect = 'none';
          e.preventDefault();
          setDrag(false);
        }}
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

Column.propTypes = {
  status: taskTypes,
};

export default Column;
