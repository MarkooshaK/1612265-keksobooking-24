import {generateNearbyAdverts} from './mock-data.js';
import {renderAdvertCard} from './advert-card.js';
import {activateAdvertForm, deactivateAdvertForm } from './advert-form.js';
import {activateFilterForm, deactivateFilterForm } from './filter-form.js';
import './form.js';

const nearbyAdverts = generateNearbyAdverts();
const mapCanvas = document.querySelector('#map-canvas');

nearbyAdverts.forEach((advert) => {
  const advertCard = renderAdvertCard(advert);
  mapCanvas.appendChild(advertCard);
});

const activateApp = () => {
  activateAdvertForm();
  activateFilterForm();
};

const deactivateApp = () => {
  deactivateAdvertForm();
  deactivateFilterForm();
};

deactivateApp();
activateApp();

generateNearbyAdverts();


