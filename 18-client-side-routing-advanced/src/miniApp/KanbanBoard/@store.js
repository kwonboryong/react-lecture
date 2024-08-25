import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { TASKS } from './@types';

// 목록의 초기 상태(초기값)
const initialTasks = [
  {
    id: '6602c2fe-1cc6-4010-8cf6-e81f53b5eab2',
    title: 'Zustand로 관리하는 리액트 앱 상태',
    description: '컨텍스트 없이도 손쉽게 상태 공유 및 관리를 할 수 있어요.',
    status: TASKS.planned,
  },
];

// 칸반 보드 기능(작업 추가/삭제/드래그/이동)
// 상태 저장소 정의
const store = (set) => ({
  tasks: initialTasks,
  draggedTask: null,

  // 작업 추가 메서드
  addTask: (title, description, status) =>
    set(
      (state) => ({
        tasks: [
          ...state.tasks,
          { id: crypto.randomUUID(), title, description, status },
          // - crypto.randomUUID()를 사용하여 작업의 고유 ID를 생성
          // - 제목, 설명, 상태를 포함한 새 작업을 tasks 배열에 추가
        ],
      }),
      false,
      'addTask'
    ),

  // 작업 삭제 메서드
  deleteTask: (id) =>
    set(
      (state) => ({
        tasks: state.tasks.filter((task) => task.id !== id),
        // filter 메서드를 사용하여 ID가 일치하지 않는 작업만 남기고 새로운 tasks 배열을 설정
      }),
      false,
      'deleteTask'
    ),

  // 드래그된 작업 설정 메서드
  setDraggedTask: (id) =>
    set(
      (state) => ({
        draggedTask: state.tasks.find((task) => task.id === id) ?? null,
        // find 메서드를 사용하여 주어진 ID에 해당하는 작업을 찾아서 draggedTask 상태를 업데이트
      }),
      false,
      'setDraggedTask'
    ),

  // 작업 이동 메서드
  moveTask: (id, status) =>
    set(
      (state) => ({
        // map 메서드를 사용하여 주어진 ID에 해당하는 작업의 상태를 업데이트하고 나머지 작업은 그대로 유지
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

// 상태 저장소 생성 및 내보내기
// - devtools 미들웨어를 사용하여 상태 변경을 브라우저의 개발자 도구에서 추적할 수 있도록 설정
const useKanbanBoardStore = create(devtools(store));

export default useKanbanBoardStore;
