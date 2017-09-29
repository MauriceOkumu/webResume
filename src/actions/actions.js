export const INCREASE_COUNT = 'INCREASE_COUNT';
export const DECREASE_COUNT = 'DECREASE_COUNT';

export function increaseLike() {
  return {
    type: INCREASE_COUNT
  }
}

export function decreaseLike() {
  return {
    type: DECREASE_COUNT
  }
}