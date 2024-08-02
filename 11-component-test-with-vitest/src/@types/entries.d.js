import { exact, string, bool, oneOf } from 'prop-types';

export const UserType = exact({
  id: string.isRequired,
  name: string.isRequired,
  isAdmin: bool,
}).isRequired;

export const StatusMessagesType = oneOf([
  'offline',
  'online',
  'dont-disturb',
  'away',
]);

export const ProductImageType = exact({
  id: string.isRequired,
  label: string.isRequired,
  url: string.isRequired,
}).isRequired;
