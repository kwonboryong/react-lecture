import { useLayoutEffect, useState } from 'react';
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
import { useTheme } from '@/app/contexts/theme';

function TodoListApp() {
  const [todos, setTodos] = useState(initialTodos);
  const [visibility, setVisibility] = useState(VISIBILITIES.ALL);

  const [themeColor, setThemeColor] = useState('#562ec6');

  const [focusColor, setFocusColor] = useState('#fddf37');

  const { semantics } = useTheme();

  const theme = semantics.dark;

  useLayoutEffect(() => {
    if ('TodoListApp' in theme) {
      const { themeColor, focusColor } = theme.TodoListApp;
      setThemeColor(themeColor);
      setFocusColor(focusColor);
    }
  }, [theme]);

  const handleChangeTodo = (todo) =>
    setTodos((todos) => getUpdated(todos, todo));

  const handleChangeVisibility = (visibility) => {
    setVisibility(visibility);
  };

  const handleChangeThemeColor = (color) => {
    setThemeColor(color);
  };

  const handleChangeFocusColor = (color) => {
    setFocusColor(color);
  };

  const filtered = getFiltered(todos, visibility);

  return (
    <div
      className={S.TodoListApp}
      style={{ '--theme-color': themeColor, '--focus-color': focusColor }}
    >
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
