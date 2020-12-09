var elForm = document.querySelector('.form');
var elFormInput = elForm.querySelector('.form__input');
var elresult = elForm.querySelector('.form__result');

elForm.addEventListener('submit', function (evt){
evt.preventDefault();
if(elFormInput.value % 3 === 0 && elFormInput.value % 5 === 0){
  elresult.textContent = 'FizzBuzz';
} else if (elFormInput.value % 3 === 0){
  elresult.textContent = 'Fizz';
} else if(elFormInput.value % 5 === 0){
  elresult.textContent = 'Buzz';
} else if(elFormInput.value / 3 &&  elFormInput.value / 5){
  elresult.textContent = elFormInput.value;
}


})