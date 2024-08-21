export const initialTodos = [
  {
    id: crypto.randomUUID(),
    do: 'memo',
    done: false,
    limit: 8,
  },
  {
    id: crypto.randomUUID(),
    do: 'useCallback',
    done: false,
    limit: 8,
  },
  {
    id: crypto.randomUUID(),
    do: 'useMemo',
    done: false,
    limit: 8,
  },
];

export const VISIBILITIES = {
  ALL: '모두 (All)',
  ACTIVE: '할일 (Do)',
  COMPLETED: '한일 (Done)',
};

export const visibilities = Object.values(VISIBILITIES);

export const getUpdated = (todos, todo) => {
  const nextTodos = todos.map((todoItem) => {
    if (todoItem.id === todo.id) {
      const nextTodoLimit = todo.limit - 1;

      if (nextTodoLimit === 0) {
        return null;
      }

      return {
        ...todo,
        limit: nextTodoLimit,
      };
    } else {
      return todoItem;
    }
  });

  return nextTodos.filter(Boolean);
};

export const getFiltered = (todos, visibility) => {
  let nextTodos = todos;

  if (visibility === VISIBILITIES.ACTIVE) {
    nextTodos = todos.filter((todo) => !todo.done);
  }

  if (visibility === VISIBILITIES.COMPLETED) {
    nextTodos = todos.filter((todo) => todo.done);
  }

  return nextTodos;
};
