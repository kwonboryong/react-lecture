import { memo, useRef, useState } from 'react';
import { func } from 'prop-types';
import S from './style.module.css';

AddTodo.propTypes = {
  setTodos: func,
};

function AddTodo({ setTodos }) {
  const [newTodo, setNewTodo] = useState('');
  const inputRef = useRef(null);

  const handleChange = (e) => {
    setNewTodo(e.target.value.trim());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const inputElement = inputRef.current;

    if (newTodo.length === 0) {
      alert('할 일을 입력하세요.');
      inputElement.select();
      return;
    }

    setTodos?.((todos) => {
      const newTodoItem = {
        id: crypto.randomUUID(),
        do: newTodo,
        done: false,
        limit: 8,
      };

      return [...todos, newTodoItem];
    });

    inputElement.value = '';
    inputElement.focus();
  };

  return (
    <form className={S.AddTodo} onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        type="text"
        aria-label="할 일"
        defaultValue={newTodo}
        placeholder="예) 리액트 핵심 개념"
        onChange={handleChange}
      />
      <button type="submit">추가</button>
    </form>
  );
}

export default memo(AddTodo);
