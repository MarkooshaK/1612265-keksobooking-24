import './utils.js';

const advertCardTemplate = document.querySelector('#card').content;

const OfferTypeDictionary = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};

const renderAdvertCard = (advert) => {
  const advertElement = advertCardTemplate.cloneNode(true);
  const roomDescription = advertElement.querySelector('.popup__description');
  advertElement.querySelector('.popup__title').textContent = advert.offer.title;
  advertElement.querySelector('.popup__text--address').textContent = advert.offer.address;
  advertElement.querySelector('.popup__text--price').textContent = `${advert.offer.price} ₽/ночь`;
  advertElement.querySelector('.popup__type').textContent = OfferTypeDictionary[advert.offer.type];
  advertElement.querySelector('.popup__text--capacity').textContent = `${advert.offer.rooms} комнаты для ${advert.offer.guests} гостей`;
  advertElement.querySelector('.popup__text--time').textContent = `Заезд после ${advert.offer.checkin}, выезд до ${advert.offer.checkout}`;
  advertElement.querySelector('.popup__avatar').src = advert.author.avatar;
  roomDescription.textContent = advert.offer.description;

  const featuresListElement = advertElement.querySelector('.popup__features').querySelectorAll('.popup__feature');

  featuresListElement.forEach((featuresListItem) => {
    const isNecessary = advert.offer.features.some(
      (features) => featuresListItem.classList.contains(`popup__feature--${features}`),
    );

    if (!isNecessary) {
      featuresListItem.remove();
    }
  });

  const firstImg = advertElement.querySelector('.popup__photos').querySelector('img');

  advert.offer.photos.forEach((photo) => {
    firstImg.src = photo;
    const copyImg = firstImg.cloneNode(false);
    advertElement.querySelector('.popup__photos').appendChild(copyImg);
  });
  firstImg.remove();

  return advertElement;
};

export {renderAdvertCard};

