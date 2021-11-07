const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const MAX_PRICE = 1000000;

const advertForm = document.querySelector('.ad-form');
const advertTitleInput = advertForm.querySelector('#title');
const advertPriceInput = advertForm.querySelector('#price');
const advertHouseType = advertForm.querySelector('#type');
const advertRoomNumber = advertForm.querySelector('#room_number');
const advertCapacity = advertForm.querySelector('#capacity');


const validateAdvertPrice = () => {
  const advertPriceValue = advertPriceInput.value;
  const advertHouseTypeValue = advertHouseType.value;

  if (advertPriceValue > MAX_PRICE) {
    advertPriceInput.setCustomValidity(`Максимально допустимая цена равна ${MAX_PRICE}`);
  }

  switch(advertHouseTypeValue) {
    case 'bungalow':
      advertPriceInput.setAttribute('min', 0);
      break;
    case 'flat':
      advertPriceInput.setAttribute('min', 1000);
      break;
    case 'hotel':
      advertPriceInput.setAttribute('min', 3000);
      break;
    case 'house':
      advertPriceInput.setAttribute('min', 5000);
      break;
    case 'palace':
      advertPriceInput.setAttribute('min', 10000);
      break;
    default: break;
  }
};


const validateAdvertTitlle = () => {
  const titleValueLength = advertTitleInput.value.length;
  let advertTitleError = '';

  if(titleValueLength < MIN_TITLE_LENGTH) {
    advertTitleError = `Нужно ещё ${MIN_TITLE_LENGTH - titleValueLength} символов`;
  } else if (titleValueLength > MAX_TITLE_LENGTH) {
    advertTitleError =`Удалите лишние ${titleValueLength - MAX_TITLE_LENGTH} символов`;
  } else {
    advertTitleError = '';
  }

  advertTitleInput.setCustomValidity(advertTitleError);
};

const validateAdvertCapacity  = () => {
  const advertRoomNumberValue = advertRoomNumber.value;
  const advertCapacityValue = advertCapacity.value;
  let advertCapacityError = '';

  if (advertRoomNumberValue === '1' && advertCapacityValue !== '1') {
    advertCapacityError = '1 комната вмещает 1 гостя';
  } else if (advertRoomNumberValue === '2' && advertCapacityValue === '3') {
    advertCapacityError = '2 комнаты вмещает 1-го или 2-х гостей';
  } else if (advertRoomNumberValue === '2' && advertCapacityValue === '0') {
    advertCapacityError = '2 комнаты вмещает 1-го или 2-х гостей';
  } else if (advertRoomNumberValue === '3' && advertCapacityValue === '0') {
    advertCapacityError = '3 комнаты вмещает 1-го или 2-х или 3-х гостей';
  } else if (advertRoomNumberValue === '100' && advertCapacityValue !== '0') {
    advertCapacityError = '100 комнат - не для гостей';
  }

  advertRoomNumber.setCustomValidity(advertCapacityError);
};


const validateAdvertForm = () => { advertForm.addEventListener('change', (evt) => {
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
};

export {validateAdvertForm};
