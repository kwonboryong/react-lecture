import { useCallback, useMemo, useState } from 'react';
import S from './style.module.css';
import ThemeSwitcher from './ThemeSwitcher';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import {
  getFiltered,
  getUpdated,
  initialTodos,
  VISIBILITIES,
} from './@constants';

function TodoListApp() {
  const [todos, setTodos] = useState(initialTodos);
  const [visibility, setVisibility] = useState(VISIBILITIES.ALL);
  const [themeColor, setThemeColor] = useState('#562ec6');
  const [focusColor, setFocusColor] = useState('#fddf37');

  const handleChangeTodo = useCallback(
    (todo) => setTodos((todos) => getUpdated(todos, todo)),
    []
  );

  const handleChangeVisibility = useCallback((visibility) => {
    setVisibility(visibility);
  }, []);

  const handleChangeThemeColor = useCallback((color) => {
    setThemeColor(color);
  }, []);

  const handleChangeFocusColor = useCallback((color) => {
    setFocusColor(color);
  }, []);

  const filtered = useMemo(
    () => getFiltered(todos, visibility),
    [todos, visibility]
  );

  const todoListAppStyles = useMemo(
    () => ({
      '--theme-color': themeColor,
      '--focus-color': focusColor,
    }),
    [themeColor, focusColor]
  );

  return (
    <div className={S.TodoListApp} style={todoListAppStyles}>
      <ThemeSwitcher
        visibility={visibility}
        themeColor={themeColor}
        focusColor={focusColor}
        onChangeVisibility={handleChangeVisibility}
        onChangeThemeColor={handleChangeThemeColor}
        onChangeFocusColor={handleChangeFocusColor}
      />

      <TodoList list={filtered} onChangeTodo={handleChangeTodo} />

      <AddTodo setTodos={setTodos} />
    </div>
  );
}

export default TodoListApp;
