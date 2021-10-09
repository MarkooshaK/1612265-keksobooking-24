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

const title = ['Лучшее предложение', 'Выгоднее быть не может', 'Дешевле некуда'];
const type = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const checkin = ['12:00', '13:00', '14:00'];
const checkout = ['12:00', '13:00', '14:00'];
const features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const description = ['4 стены и окошко', 'Есть свет, но нет дверей', 'Удобная стальная мебель и резные плинтусы'];
const photo = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];
const numberOfObject = 10;

const getRandomArrayElement = (elements) => {
  return elements[getRandomIntegers(0, elements.length - 1)];
};

const getAdvertNearby = () => {
  const result = [];
  for (let i = 1; i <= numberOfObject; i++) {
    const avatarId = i < 10 ? `0${i}` : i = 10;
    const lat = getRandomFractionalNumber(35.65000, 35.70000, 5);
    const lng =  getRandomFractionalNumber(139.70000, 139.80000, 5);
    const amount = getRandomIntegers(1,7);
    result.push ({
      author: {
        avatar: `img/avatars/user${avatarId}.png`,
      },
      offer: {
        title: getRandomArrayElement(title),
        address: `${lat}, ${lng}`,
        price: getRandomIntegers(1000, 50000),
        type: getRandomArrayElement(type),
        rooms: getRandomIntegers(1, 20),
        guests: getRandomIntegers(1, 10),
        checkin: getRandomArrayElement(checkin),
        checkout: getRandomArrayElement(checkout),
        features: features.slice(0, amount),
        description: getRandomArrayElement(description),
        photo: photo.slice(0, amount),
      },
      location: {
        lat,
        lng,
      },
    });
  }
  return result;
};

const mockData = getAdvertNearby();
