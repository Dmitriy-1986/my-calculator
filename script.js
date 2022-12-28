'use strict';

const calcForm = document.querySelector('#calc_form'),
      firstInput = calcForm.querySelector('#first_input'),
      secondInput = calcForm.querySelector('#second_input'),
      btn = calcForm.querySelector('#btn'),
      result = document.querySelector('#result'),
      selectAction = document.querySelector('#select_action');

calcForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const allValue = Number(firstInput.value) && Number(secondInput.value);
    if (!isNaN(allValue)) {
        if (selectAction.value === '+') {
            result.textContent = Number(firstInput.value) + Number(secondInput.value);
        } else if (selectAction.value === '-') {
            result.textContent = Number(firstInput.value) - Number(secondInput.value);
        } else if (selectAction.value === '*') {
            result.textContent = Number(firstInput.value) * Number(secondInput.value);
        } else if (selectAction.value === '/') {
            result.textContent = Number(firstInput.value) / Number(secondInput.value);
        };
    } else {
        result.textContent = 'Введите в поле число!';
    };

    calcForm.reset();
})
