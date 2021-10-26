const advertForm = document.querySelector('.ad-form');
const advertFormElements = advertForm.querySelectorAll('.ad-form__element');

const activateAdvertForm = () => {
  advertForm.classList.remove('ad-form--disabled');

  for (const advertFormElement of advertFormElements) {
    advertFormElement.disabled = false;
  }
};

const deactivateAdvertForm = () => {
  advertForm.classList.add('ad-form--disabled');

  for (const advertFormElement of advertFormElements) {
    advertFormElement.disabled = true;
  }
};

export {activateAdvertForm, deactivateAdvertForm};

