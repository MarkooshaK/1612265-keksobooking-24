const advertForm = document.querySelector('.ad-form');
const advertFormElements = advertForm.querySelectorAll('.ad-form__element');
const mapFiltersForm = document.querySelector('.map__filters');
const mapFiltersFormElements  = mapFiltersForm.children;

const runDisabledPageState = () => {
  advertForm.classList.add('ad-form--disabled');
  for (const advertFormElement of advertFormElements) {
    advertFormElement.disabled = true;
  }
  mapFiltersForm.classList.add('map__filters--disabled');
  for (const mapFiltersFormElement of mapFiltersFormElements) {
    mapFiltersFormElement.disabled = true;
  }
};

const runActivePageState = () => {
  advertForm.classList.remove('ad-form--disabled');
  advertFormElements.disabled = false;
  mapFiltersForm.classList.remove('map__filters--disabled');
  mapFiltersForm.children.disabled = false;
};


export {runDisabledPageState, runActivePageState};


