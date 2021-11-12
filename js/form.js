import {HouseType} from './constants.js';

const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const MAX_PRICE = 1000000;
const RoomsAmount = {
  ONE: '1',
  TWO: '2',
  THREE: '3',
  HUNDRED: '100',
};

const GuestsAmount = {
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
const advertTimeIn = advertForm.querySelector('#timein');
const advertTimeOut = advertForm.querySelector('#timeout');
const MinAdvertPrice = {
  [HouseType.Bungalow]: 0,
  [HouseType.Flat]: 1000,
  [HouseType.Hotel]: 3000,
  [HouseType.House]: 5000,
  [HouseType.Palace]: 10000,
};

const validateAdvertPrice = () => {
  const advertPriceValue = advertPriceInput.value;
  const advertHouseTypeValue = advertHouseType.value;

  if (advertPriceValue > MAX_PRICE) {
    advertPriceInput.setCustomValidity(`Максимально допустимая цена равна ${MAX_PRICE}`);
  }

  advertPriceInput.setAttribute('min', MinAdvertPrice[advertHouseTypeValue]);
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

  if (advertRoomNumberValue === RoomsAmount.ONE && advertCapacityValue !== GuestsAmount.ONE) {
    error = '1 комната вмещает 1 гостя';
  } else if (advertRoomNumberValue === RoomsAmount.TWO && advertCapacityValue === GuestsAmount.THREE) {
    error = '2 комнаты вмещает 1-го или 2-х гостей';
  } else if (advertRoomNumberValue === RoomsAmount.TWO && advertCapacityValue === GuestsAmount.NOT_FOR_GUEST) {
    error = '2 комнаты вмещает 1-го или 2-х гостей';
  } else if (advertRoomNumberValue === RoomsAmount.THREE && advertCapacityValue === GuestsAmount.NOT_FOR_GUEST) {
    error = '3 комнаты вмещает 1-го или 2-х или 3-х гостей';
  } else if (advertRoomNumberValue === RoomsAmount.HUNDRED && advertCapacityValue !== GuestsAmount.NOT_FOR_GUEST) {
    error = '100 комнат - не для гостей';
  }

  advertRoomNumber.setCustomValidity(error);
};

const validateAdvertTime = () => {
  const timeInValue = advertTimeIn.value;

  if (timeInValue === '12:00') {
    advertTimeOut.options[0].selected = true;
  } else if (timeInValue === '14:00') {
    advertTimeOut.options[2].selected = true;
  } else if (timeInValue === '13:00') {
    advertTimeOut.options[1].selected = true;
  }
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
    case advertTimeIn:
      validateAdvertTime();
      break;
    default: break;
  }
});
