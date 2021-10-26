const mapFiltersForm = document.querySelector('.map__filters');
const mapFiltersFormElements  = mapFiltersForm.children;

const activateFilterForm = () => {
  mapFiltersForm.classList.remove('map__filters--disabled');

  for (const mapFiltersFormElement of mapFiltersFormElements) {
    mapFiltersFormElement.disabled = false;
  }
};

const deactivateFilterForm = () => {
  mapFiltersForm.classList.add('map__filters--disabled');

  for (const mapFiltersFormElement of mapFiltersFormElements) {
    mapFiltersFormElement.disabled = true;
  }
};

export {activateFilterForm, deactivateFilterForm};
