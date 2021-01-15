//converting snake_case to lowercase
export const convertSnakeCase = s => {
  return s.replace(/([-_][a-z])/gi, $1 => {
    return $1.replace("_", " ");
  });
};
