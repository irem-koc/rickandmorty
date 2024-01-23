const getChar = (stringUrl: string) => {
  const match = stringUrl.match(/\/(\d+)$/);

  const desiredNumber = match ? parseInt(match[1], 10) : 0;
  return Number(desiredNumber);
};
export default getChar;
