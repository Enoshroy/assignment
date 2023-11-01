const genderCheckboxes = document.querySelectorAll('.gender-checkbox');

genderCheckboxes.forEach(function (checkbox) {
  checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
      genderCheckboxes.forEach(function (otherCheckbox) {
        if (otherCheckbox !== checkbox) {
          otherCheckbox.checked = false;
        }
      });
    }
  });
});

function submitForm() {
  const form = document.getElementById('survey-form');
  const errorMessages = document.querySelectorAll('.error-message');
  errorMessages.forEach(function (element) {
    element.textContent = '';
  });

  const invalidFields = form.querySelectorAll(':invalid');
  if (invalidFields.length === 0) {
    const formData = new FormData(form);
    let formValues = 'Survey Form Data:\n';

    formData.forEach((value, key) => {
      formValues += `${key}: ${value}\n`;
    });

    alert(formValues);
    form.reset();
  } else {
    invalidFields.forEach(function (field) {
      const label = field.previousElementSibling;
      if (field.validity.valueMissing) {
        label.insertAdjacentHTML('beforeend', '<span class="error-message">This field is required.</span>');
      }
      if (field.validity.patternMismatch) {
        label.insertAdjacentHTML('beforeend', `<span class="error-message">${field.title}</span>`);
      }
      if (field.validity.typeMismatch) {
        label.insertAdjacentHTML('beforeend', '<span class="error-message">Please enter a valid email or phone number.</span>');
      }
      if (field.validity.tooShort) {
        label.insertAdjacentHTML('beforeend', `<span class="error-message">Please enter at least ${field.minLength} characters.</span>`);
      }
    });
  }
}

function resetForm() {
  const form = document.getElementById('survey-form');
  form.reset();
  const errorMessages = document.querySelectorAll('.error-message');
  errorMessages.forEach(function (element) {
    element.textContent = '';
  });
}