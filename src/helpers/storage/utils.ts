export const tryParse = (value: any) => {
  try {
    JSON.parse(value);
    return true;
  } catch (e) {
    return false;
  }
};
