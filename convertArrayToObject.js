//method for converting an array to an object with a fixed value
export const arrayToObject = (array, value) => {
  return array
    .map(rel => rel.id)
    .reduce((acc, curr) => ((acc[curr] = value), acc), {});
};
