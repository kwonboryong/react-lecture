import { arrayOf, exact, number, string } from 'prop-types';

export const UserType = exact({
  id: number,
  name: string,
  username: string,
  email: string,
  phone: string,
  website: string,
  province: string,
  city: string,
  district: string,
  street: string,
  zipcode: string,
  createdAt: string,
  updatedAt: string,
});

export const UsersListType = arrayOf(UserType);
