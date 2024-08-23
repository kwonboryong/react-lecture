import { createContext, useContext, useMemo, useReducer } from 'react';
import taskReducer, {
  addTask,
  deleteTask,
  INITIAL_TASKS,
  setTask,
  togglePin,
} from './@reducer';

const taskContext = createContext();

export function TaskProvider(props) {
  // [상태]
  const [taskList, dispatch] = useReducer(taskReducer, INITIAL_TASKS);

  // [이벤트 핸들러: 메서드]
  const taskMethods = useMemo(() => {
    const handleAddTask = (nextStep) => dispatch(addTask(nextStep));
    const handleDeleteTask = (deleteId) => dispatch(deleteTask(deleteId));
    const handleTogglePin = (taskId) => dispatch(togglePin(taskId));
    const handleSetTask = (taskId, isCompleted) =>
      dispatch(setTask(taskId, isCompleted));

    return {
      addTask: handleAddTask,
      deleteTask: handleDeleteTask,
      setTask: handleSetTask,
      togglePin: handleTogglePin,
    };
  }, []);

  // [파생된 상태]
  const pinnedTaskList = taskList.filter((task) => task.isPin);
  const unpinnedTaskList = taskList.filter((task) => !task.isPin);

  return (
    <taskContext.Provider
      value={{ pinnedTaskList, unpinnedTaskList, methods: taskMethods }}
      {...props}
    />
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useTask = () => {
  const contextValue = useContext(taskContext);

  if (!contextValue) {
    throw new Error(
      'useTask 훅은 TaskManager 컨텍스트 내부에서만 사용해야 합니다.'
    );
  }

  return contextValue;
};
