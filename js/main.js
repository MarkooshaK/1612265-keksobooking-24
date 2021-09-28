const returnRandomIntegers = (from, to) => {
  if(from >=0 && to <= Infinity) {
    const number = Math.floor(Math.random() * (to - from + 1) ) + from;
    if(to < from) {
      to = from;
      from = to;
    }
    return number;
  }
  throw new Error('Значения не подходят под условия задачи');
};

const returnRandomFractionalNumber = (from, to, numberOfDecimalPlaces) => {
  if(from >=0 && to <= Infinity) {
    const number = Math.random() * (to - from) + from;
    if(to < from) {
      to = from;
      from = to;
    }
    return number.toFixed(numberOfDecimalPlaces);
  }
  throw new Error('Значения не подходят под условия задачи');
};

returnRandomIntegers(2,3);
returnRandomFractionalNumber(3,6,6);

