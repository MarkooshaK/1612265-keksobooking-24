import {houseType} from './constants.js';

const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const MAX_PRICE = 1000000;
const roomsAmount = {
  ONE: '1',
  TWO: '2',
  THREE: '3',
  HUNDRED: '100',
};

const guestsAmount = {
  ONE: '1',
  TWO: '2',
  THREE: '3',
  NOT_FOR_GUEST: '0',
};


const advertForm = document.querySelector('.ad-form');
const advertTitleInput = advertForm.querySelector('#title');
const advertPriceInput = advertForm.querySelector('#price');
const advertHouseType = advertForm.querySelector('#type');
const advertRoomNumber = advertForm.querySelector('#room_number');
const advertCapacity = advertForm.querySelector('#capacity');
const minAdvertPrice = {
  [houseType.Bungalow]: 0,
  [houseType.Flat]: 1000,
  [houseType.Hotel]: 3000,
  [houseType.House]: 5000,
  [houseType.Palace]: 10000,
};

const validateAdvertPrice = () => {
  const advertPriceValue = advertPriceInput.value;
  const advertHouseTypeValue = advertHouseType.value;

  if (advertPriceValue > MAX_PRICE) {
    advertPriceInput.setCustomValidity(`Максимально допустимая цена равна ${MAX_PRICE}`);
  }

  switch(advertHouseTypeValue) {
    case 'bungalow':
      advertPriceInput.setAttribute('min', minAdvertPrice[advertHouseTypeValue]);
      break;
    case 'flat':
      advertPriceInput.setAttribute('min', minAdvertPrice[advertHouseTypeValue]);
      break;
    case 'hotel':
      advertPriceInput.setAttribute('min', minAdvertPrice[advertHouseTypeValue]);
      break;
    case 'house':
      advertPriceInput.setAttribute('min', minAdvertPrice[advertHouseTypeValue]);
      break;
    case 'palace':
      advertPriceInput.setAttribute('min', minAdvertPrice[advertHouseTypeValue]);
      break;
    default: break;
  }
};


const validateAdvertTitlle = () => {
  const titleValueLength = advertTitleInput.value.length;
  let error = '';

  if(titleValueLength < MIN_TITLE_LENGTH) {
    error = `Нужно ещё ${MIN_TITLE_LENGTH - titleValueLength} символов`;
  } else if (titleValueLength > MAX_TITLE_LENGTH) {
    error =`Удалите лишние ${titleValueLength - MAX_TITLE_LENGTH} символов`;
  } else {
    error = '';
  }

  advertTitleInput.setCustomValidity(error);
};

const validateAdvertCapacity  = () => {
  const advertRoomNumberValue = advertRoomNumber.value;
  const advertCapacityValue = advertCapacity.value;
  let error = '';

  if (advertRoomNumberValue === roomsAmount.ONE && advertCapacityValue !== guestsAmount.ONE) {
    error = '1 комната вмещает 1 гостя';
  } else if (advertRoomNumberValue === roomsAmount.TWO && advertCapacityValue === guestsAmount.THREE) {
    error = '2 комнаты вмещает 1-го или 2-х гостей';
  } else if (advertRoomNumberValue === roomsAmount.TWO && advertCapacityValue === guestsAmount.NOT_FOR_GUEST) {
    error = '2 комнаты вмещает 1-го или 2-х гостей';
  } else if (advertRoomNumberValue === roomsAmount.THREE && advertCapacityValue === guestsAmount.NOT_FOR_GUEST) {
    error = '3 комнаты вмещает 1-го или 2-х или 3-х гостей';
  } else if (advertRoomNumberValue === roomsAmount.HUNDRED && advertCapacityValue !== guestsAmount.NOT_FOR_GUEST) {
    error = '100 комнат - не для гостей';
  }

  advertRoomNumber.setCustomValidity(error);
};


advertForm.addEventListener('change', (evt) => {
  switch(evt.target) {
    case advertTitleInput:
      validateAdvertTitlle();
      break;
    case advertPriceInput:
      validateAdvertPrice();
      break;
    case advertRoomNumber:
    case advertCapacity:
      validateAdvertCapacity();
      break;
    default: break;
  }
});
