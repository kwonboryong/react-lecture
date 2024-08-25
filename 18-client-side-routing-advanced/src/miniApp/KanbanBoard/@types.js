import { oneOf } from 'prop-types';

export const TASKS = {
  planned: 'PLANNED',
  ongoing: 'ONGOING',
  done: 'DONE',
};

// 타입 검사
export const taskTypes = oneOf(Object.values(TASKS)).isRequired;
