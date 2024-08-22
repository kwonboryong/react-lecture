const ACTION_TYPES = {
  ADD_TASK: '태스크 추가',
  SET_TASK: '태스크 토글',
  TOGGLE_PIN: '핀 토글',
  DELETE_TASK: '태스크 삭제',
};

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

export const INITIAL_TASKS = [
  {
    id: '374f637e-d27f-4aa3-acb4-a76b76a31d51',
    content: 'Draiange systems',
    isCompleted: false,
    isPin: false,
  },
  {
    id: 'a1ddb5c6-f4aa-4c9c-968d-4c0750e5d705',
    content: 'Reereational faeilities',
    isCompleted: false,
    isPin: false,
  },
];

export default function reducer(state, action) {
  switch (action.type) {
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
