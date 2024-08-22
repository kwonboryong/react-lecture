/* 액션 ----------------------------------------------------------------------- */

const ACTION_TYPES = {
  ADD: '추가',
  EDIT: '수정',
  DELETE: '삭제',
  FILTER: '필터링',
  RESET: '초기화',
};

/* 액션 크리에이터 --------------------------------------------------------------- */

export const addItem = (newItem) => ({
  type: ACTION_TYPES.ADD,
  payload: newItem,
});

export const editItem = (editId, nextItem) => ({
  type: ACTION_TYPES.EDIT,
  payload: { editId, nextItem },
});

export const deleteItem = (deleteId) => ({
  type: ACTION_TYPES.DELETE,
  payload: deleteId,
});

export const filterList = (filterKey) => ({
  type: ACTION_TYPES.FILTER,
  payload: filterKey
});

export const resetList = () => ({
  type: ACTION_TYPES.RESET,
});

/* 리듀서 ---------------------------------------------------------------------- */
// 액션이란? "작업 요청서" action = {type, payload?}

const generateItem = () => crypto.randomUUID().split('-').at(0);

export const INITIAL_LIST = Array(3).fill(null).map(() => generateItem());

const listReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.ADD: {
      const nextState = [action.payload, ...state];
      return nextState;
    }

    case ACTION_TYPES.EDIT: {
      const { editId, nextItem } = action.payload;

      const nextState = state.map((item, index) => {
        return index !== editId ? item : nextItem;
      });

      return nextState;
    }

    case ACTION_TYPES.DELETE: {
      const deleteId = action.payload;
      const nextState = state.filter((item, index) => index !== deleteId);

      return nextState;
    }

    case ACTION_TYPES.FILTER: {
      const filterKey = action.payload.toString();
      const nextState = state.filter(item => item.includes(filterKey));
      return nextState;
    }

    case ACTION_TYPES.RESET: {
      return INITIAL_LIST;
    }

    default: {
      return state;
    }
  }
};

export default listReducer;
