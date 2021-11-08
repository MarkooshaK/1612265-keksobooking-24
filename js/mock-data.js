import {getRandomIntegers, getRandomFractionalNumber, getRandomArrayElement} from './utils.js';
import {HouseType} from './constants.js';

const TITLES = ['Лучшее предложение', 'Выгоднее быть не может', 'Дешевле некуда'];
const TYPES = Object.values(HouseType);
const CHECK_IN_TIMES = ['12:00', '13:00', '14:00'];
const CHECK_OUT_TIMES = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const DESCRIPTIONS = ['4 стены и окошко', 'Есть свет, но нет дверей', 'Удобная стальная мебель и резные плинтусы'];
const PHOTOS = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];
const MOCK_OFFERS_AMOUNT = 10;
const MIN_LAT = 35.65000;
const MAX_LAT = 35.70000;
const MIN_LNG = 139.70000;
const MAX_LNG = 139.80000;
const DECIMAL_PLACES = 5;
const MIN_PRICE = 1000;
const MAX_PRICE = 50000;
const MIN_ROOMS = 1;
const MAX_ROOMS = 20;
const MIN_GUESTS = 1;
const MAX_GUESTS = 10;

const generateNearbyAdverts = () => {
  const result = [];
  for (let i = 1; i <= MOCK_OFFERS_AMOUNT; i++) {
    const avatarId = i < 10 ? `0${i}` : i = 10;
    const lat = getRandomFractionalNumber(MIN_LAT, MAX_LAT, DECIMAL_PLACES);
    const lng =  getRandomFractionalNumber(MIN_LNG, MAX_LNG, DECIMAL_PLACES);
    const amount = getRandomIntegers(1,7);
    result.push ({
      author: {
        avatar: `img/avatars/user${avatarId}.png`,
      },
      offer: {
        title: getRandomArrayElement(TITLES),
        address: `${lat}, ${lng}`,
        price: getRandomIntegers(MIN_PRICE, MAX_PRICE),
        type: getRandomArrayElement(TYPES),
        rooms: getRandomIntegers(MIN_ROOMS, MAX_ROOMS),
        guests: getRandomIntegers(MIN_GUESTS, MAX_GUESTS),
        checkin: getRandomArrayElement(CHECK_IN_TIMES),
        checkout: getRandomArrayElement(CHECK_OUT_TIMES),
        features: FEATURES.slice(0, amount),
        description: getRandomArrayElement(DESCRIPTIONS),
        photos: PHOTOS.slice(0, amount),
      },
      location: {
        lat,
        lng,
      },
    });
  }
  return result;
};

export {generateNearbyAdverts};

