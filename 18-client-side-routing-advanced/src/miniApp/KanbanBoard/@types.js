import { oneOf } from 'prop-types';

export const TASKS = {
  planned: 'PLANNED',
  ongoing: 'ONGOING',
  done: 'DONE',
};

export const taskTypes = oneOf(Object.values(TASKS)).isRequired;
