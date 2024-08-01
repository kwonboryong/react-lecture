import { oneOf, arrayOf, exact, string } from 'prop-types';
import { IMAGE_TYPES, statusMessages } from '../data/learn';

export const StatusMessagesType = arrayOf(oneOf(statusMessages));

export const ImagesType = oneOf(IMAGE_TYPES);

export const ItemType = exact({
  id: string,
  message: string,
});

export const ItemsType = arrayOf(ItemType);

export const ReactLibraryType = exact({
  name: string,
  author: string,
  writtenIn: string,
  type: string,
  license: string,
});
