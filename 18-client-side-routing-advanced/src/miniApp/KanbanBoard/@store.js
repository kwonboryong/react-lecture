import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { TASKS } from './@types';

const initialTasks = [
  {
    id: '6602c2fe-1cc6-4010-8cf6-e81f53b5eab2',
    title: 'Zustand로 관리하는 리액트 앱 상태',
    description: '컨텍스트 없이도 손쉽게 상태 공유 및 관리를 할 수 있어요.',
    status: TASKS.planned,
  },
];

const store = (set) => ({
  tasks: initialTasks,
  draggedTask: null,

  addTask: (title, description, status) =>
    set(
      (state) => ({
        tasks: [
          ...state.tasks,
          { id: crypto.randomUUID(), title, description, status },
        ],
      }),
      false,
      'addTask'
    ),

  deleteTask: (id) =>
    set(
      (state) => ({
        tasks: state.tasks.filter((task) => task.id !== id),
      }),
      false,
      'deleteTask'
    ),

  setDraggedTask: (id) =>
    set(
      (state) => ({
        draggedTask: state.tasks.find((task) => task.id === id) ?? null,
      }),
      false,
      'setDraggedTask'
    ),

  moveTask: (id, status) =>
    set(
      (state) => ({
        tasks: state.tasks.map((task) => {
          if (task.id === id) {
            return {
              ...task,
              status,
            };
          } else {
            return task;
          }
        }),
      }),
      false,
      'moveTask'
    ),
});

const useKanbanBoardStore = create(devtools(store));

export default useKanbanBoardStore;
