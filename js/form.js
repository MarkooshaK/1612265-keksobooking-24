const advertForm = document.querySelector('.ad-form');
const advertFormElements = advertForm.querySelectorAll('.ad-form__element');
const mapFiltersForm = document.querySelector('.map__filters');

advertForm.classList.add('ad-form--disabled');
advertFormElements.disabled = true;
mapFiltersForm.classList.add('map__filters--disabled');
mapFiltersForm.children.disabled = true;

const runActivePageState = () => {
  advertForm.classList.remove('ad-form--disabled');
  advertFormElements.disabled = false;
  mapFiltersForm.classList.remove('map__filters--disabled');
  mapFiltersForm.children.disabled = false;
};

console.log('advertFormElements', advertFormElements);
//runActivePageState();



