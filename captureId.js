export const captureId = string => {
  const regExp = /\((\d+)\)/;
  const [capture, id] = string.match(regExp);
  return id;
};
