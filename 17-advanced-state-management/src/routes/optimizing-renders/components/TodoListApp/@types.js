import { arrayOf, bool, exact, number, oneOf, string } from 'prop-types';
import { visibilities } from './@constants';

export const TodoType = exact({
  id: string,
  do: string,
  done: bool,
  limit: number,
});

export const TodoListType = arrayOf(TodoType);

export const visibilityType = oneOf(visibilities);
