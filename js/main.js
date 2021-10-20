import {generateNearbyAdverts} from './mock-data.js';
import {renderAdvertCard} from './advert-card.js';

const nearbyAdverts = generateNearbyAdverts();
const mapCanvas = document.querySelector('#map-canvas');

nearbyAdverts.forEach((advert) => {
  const advertCard = renderAdvertCard(advert);
  mapCanvas.appendChild(advertCard);
});

generateNearbyAdverts();
