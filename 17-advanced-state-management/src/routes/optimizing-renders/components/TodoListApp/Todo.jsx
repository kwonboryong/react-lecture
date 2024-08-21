import clsx from 'clsx';
import { memo } from 'react';
import { func } from 'prop-types';
import { TodoType } from './@types';
import S from './style.module.css';

Todo.propTypes = {
  todo: TodoType.isRequired,
  onChange: func,
};

function Todo({ todo, onChange }) {
  const handleChange = (e) => {
    const nextTodo = {
      ...todo,
      done: e.target.checked,
    };

    onChange?.(nextTodo);
  };

  return (
    <li className={S.Todo}>
      <label>
        <span className={S.done}>
          <input type="checkbox" checked={todo.done} onChange={handleChange} />
        </span>
        <span className={clsx(S.do, todo.done && S.checked)}>{todo.do}</span>
        <span className={S.limit}>{todo.limit}</span>
      </label>
    </li>
  );
}

export default memo(Todo);
