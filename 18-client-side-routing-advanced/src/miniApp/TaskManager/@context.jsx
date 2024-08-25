import { createContext, useContext, useMemo, useReducer } from 'react';
import taskReducer, {
  addTask,
  deleteTask,
  INITIAL_TASKS,
  setTask,
  togglePin,
} from './@reducer';

// Context 객체 생성 => 하위 컴포넌트에 넘겨줄 수 있음
const taskContext = createContext();

export function TaskProvider(props) {

  // 상태
  const [taskList, dispatch] = useReducer(taskReducer, INITIAL_TASKS);

  // 이벤트 핸들러: 메서드
  const taskMethods = useMemo(() => {
    // 각 핸들러는 dispatch를 호출하여 리듀서(상태 업데이트)에 액션 전달

    // 작업 추가
    const handleAddTask = (nextStep) => dispatch(addTask(nextStep));
    // 작업 삭제
    const handleDeleteTask = (deleteId) => dispatch(deleteTask(deleteId));
    // 핀 상태 토글
    const handleTogglePin = (taskId) => dispatch(togglePin(taskId));
    // 작업 완료 상태 설정
    const handleSetTask = (taskId, isCompleted) =>
      dispatch(setTask(taskId, isCompleted));


    return {
      addTask: handleAddTask,
      deleteTask: handleDeleteTask,
      setTask: handleSetTask,
      togglePin: handleTogglePin,
    };
  }, []);


  // 파생된 상태
  // isPin이 true인 작업들만 필터링한 목록
  const pinnedTaskList = taskList.filter((task) => task.isPin);

  // isPin이 false인 작업들만 필터링한 목록 
  const unpinnedTaskList = taskList.filter((task) => !task.isPin);


  return (
    <taskContext.Provider
    value={{ pinnedTaskList, unpinnedTaskList, methods: taskMethods }}
    // value 속성을 통해 하위 컴포넌트에 상태와 메서드를 제공
      {...props}
    />
  );
}


// useTask 커스텀 훅
// - TaskProvider 컴포넌트의 상태와 메서드를 하위 컴포넌트에서 쉽게 사용할 수 있게 함
// eslint-disable-next-line react-refresh/only-export-components
export const useTask = () => {
  // taskContext에서 제공하는 값을 가져옴
  const contextValue = useContext(taskContext);

  // 에러 처리
  if (!contextValue) {
    throw new Error(
      'useTask 훅은 TaskManager 컨텍스트 내부에서만 사용해야 합니다.'
    );
  }

  return contextValue;
  // taskContext에서 제공한 값을 반환
  // - pinnedTaskList, unpinnedTaskList, taskMethods가 포함됨
};
