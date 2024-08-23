import S from './TaskManager.module.css';
import { TaskProvider } from './@context';
import UnpinnedTaskList from './UnpinnedTaskList';
import PinnedTaskList from './PinnedTaskList';
import AddTask from './AddTask';
import clsx from 'clsx';

function TaskManager() {
  return (
    <TaskProvider>
      <div
        lang="en"
        className={clsx(
          S.component,
          'w-72 flex flex-col gap-2 p-5 border border-solid border-accent rounded text-accent'
        )}
      >
        <PinnedTaskList />
        <UnpinnedTaskList />
        <AddTask />
      </div>
    </TaskProvider>
  );
}

export default TaskManager;
