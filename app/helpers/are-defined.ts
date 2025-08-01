import { isUndefined } from 'lodash';

export const areDefined = <T>(values: T[]): boolean => {
  return values.every((value): boolean => {
    return !isUndefined(value);
  });
};
