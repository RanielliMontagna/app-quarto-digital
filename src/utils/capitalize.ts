export const capitalize = (string: string) => {
  const _stringLower = string.toLowerCase();

  return _stringLower.replace(/(?:^|\s)\S/g, function (a: string) {
    return a.toUpperCase();
  });
};
