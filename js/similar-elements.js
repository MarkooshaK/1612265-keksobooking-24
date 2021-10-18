import {getAdvertNearby} from './mock-data.js';
import './utils.js';

const similarElementsTemplate = document.querySelector('#card').content;
const mapCanvas = document.querySelector('#map-canvas');

const OfferTypeDictionary = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};

const similarAdvert = getAdvertNearby();

similarAdvert.forEach((data) => {
  const advertElement = similarElementsTemplate.cloneNode(true);
  advertElement.querySelector('.popup__title').textContent = data.offer.title;
  advertElement.querySelector('.popup__text--address').textContent = data.offer.address;
  advertElement.querySelector('.popup__text--price').textContent = `${data.offer.price} ₽/ночь`;
  advertElement.querySelector('.popup__type').textContent = OfferTypeDictionary[data.offer.type];
  advertElement.querySelector('.popup__text--capacity').textContent = `${data.offer.rooms} комнаты для ${data.offer.guests} гостей`;
  advertElement.querySelector('.popup__text--time').textContent = `Заезд после ${data.offer.checkin}, выезд до ${data.offer.checkout}`;
  advertElement.querySelector('.popup__avatar').src = data.author.avatar;
  advertElement.querySelector('.popup__description').textContent = data.offer.description;

  const featuresListElement = advertElement.querySelector('.popup__features').querySelectorAll('.popup__feature');

  featuresListElement.forEach((featuresListItem) => {
    const isNecessary = data.offer.features.some(
      (features) => featuresListItem.classList.contains(`popup__feature--${features}`),
    );

    if (!isNecessary) {
      featuresListItem.remove();
    }
  });

  const firstImg = advertElement.querySelector('.popup__photos').querySelector('img');

  for (let i = 0; i < data.offer.photo.length; i++) {
    firstImg.src = data.offer.photo[i];
    const copyImg = firstImg.cloneNode(false);
    advertElement.querySelector('.popup__photos').appendChild(copyImg);
    firstImg.classList.add('template-img');
  }
  firstImg.remove();

  if (data.offer.description === '') {
    advertElement.querySelector('.popup__description').classList.add('visually-hidden');
  }

  mapCanvas.appendChild(advertElement);
});

