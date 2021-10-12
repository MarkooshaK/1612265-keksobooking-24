const getRandomIntegers = (from, to) => {
  if (from < 0 || to < 0) {
    throw new Error('Диапазон должен включать только положительные числа');
  }
  if (from === to) {
    throw new Error('Диапазон не может состоять из равных значений');
  }
  if (from > to) {
    throw new Error('Первый параметр не может быть больше второго');
  }
  return Math.floor(Math.random() * (to - from + 1) ) + from;
};

const getRandomFractionalNumber = (from, to, numberOfDecimalPlaces) => {
  if (from < 0 || to < 0) {
    throw new Error('Диапазон должен включать только положительные числа');
  }
  if (from === to) {
    throw new Error('Диапазон не может состоять из равных значений');
  }
  if (from > to) {
    throw new Error('Первый параметр не может быть больше второго');
  }
  return (Math.random() * (to - from) + from).toFixed(numberOfDecimalPlaces);
};

getRandomIntegers(2, 3);
getRandomFractionalNumber(3, 6, 6);

const getRandomArrayElement = (elements) => (
  elements[getRandomIntegers(0, elements.length - 1)]
);

export {getRandomIntegers, getRandomFractionalNumber, getRandomArrayElement};
