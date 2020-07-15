const capitalizeString = (str) => {
  const firstLetter = str.charAt(0).toUpperCase();
  const reminder = str.slice(1);
  return firstLetter + reminder;
};

export default { capitalizeString };