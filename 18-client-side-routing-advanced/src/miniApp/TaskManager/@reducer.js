// reducer 함수와 관련된 액션 타입 및 액션 생성자

// 액션 타입 정의
// - 상태를 업데이트할 때 수행할 작업의 종류를 명시
const ACTION_TYPES = {
  ADD_TASK: '태스크 추가',
  SET_TASK: '태스크 토글',
  TOGGLE_PIN: '핀 토글',
  DELETE_TASK: '태스크 삭제',
};


// 액션 객체를 만드는 함수
// 작업을 추가할 때 사용되는 액션 생성
export const addTask = (nextStep) => ({
  type: ACTION_TYPES.ADD_TASK,
  payload: nextStep,
});

export const setTask = (taskId, isCompleted) => ({
  type: ACTION_TYPES.SET_TASK,
  payload: { taskId, isCompleted },
});

export const togglePin = (taskId) => ({
  type: ACTION_TYPES.TOGGLE_PIN,
  payload: taskId,
});

export const deleteTask = (deleteId) => ({
  type: ACTION_TYPES.DELETE_TASK,
  payload: deleteId,
});


// 초기 목록
// - 리듀서가 초기 상태로 사용할 기본 작업 목록
export const INITIAL_TASKS = [
  {
    id: '374f637e-d27f-4aa3-acb4-a76b76a31d51',
    content: 'Context + Reducer',
    isCompleted: false,
    isPin: false,
  },
  {
    id: 'a1ddb5c6-f4aa-4c9c-968d-4c0750e5d705',
    content: 'Zustand',
    isCompleted: false,
    isPin: false,
  },
];


// reducer 함수
// - useReducer 훅에 의해 호출되는 함수
// - 현재 상태(state)와 액션(action)을 받아 새로운 상태를 반환
export default function reducer(state, action) {
  switch (action.type) {
    // 새로운 작업을 생성하여 상태에 추가
    case ACTION_TYPES.ADD_TASK: {
      const newTask = {
        id: crypto.randomUUID(),
        content: action.payload,
        isCompleted: false,
        isPin: false,
      };

      const nextState = [newTask, ...state];

      return nextState;
    }

    case ACTION_TYPES.DELETE_TASK: {
      const deleteId = action.payload;
      const nextState = state.filter((item) => item.id !== deleteId);
      return nextState;
    }

    case ACTION_TYPES.TOGGLE_PIN: {
      const taskId = action.payload;

      const nextState = state.map((item) => {
        if (item.id === taskId) {
          const nextTask = { ...item, isPin: !item.isPin };
          return nextTask;
        } else {
          return item;
        }
      });
      return nextState;
    }

    case ACTION_TYPES.SET_TASK: {
      const { taskId, isCompleted } = action.payload;

      const nextState = state.map((item) => {
        if (item.id === taskId) {
          const nextTask = { ...item, isCompleted };
          return nextTask;
        } else {
          return item;
        }
      });

      return nextState;
    }

    default: {
      return state;
    }
  }
}
