const btnPlus = document.querySelector('.products__btn-plus');
const btnMinus = document.querySelector('.products__btn-minus');
const counter = document.querySelector('.products__count');

const handlerMinus = () => {
  if (+counter.value <= 1) {
    counter.value = 1;
    return;
  }
  let count = +counter.value;
  count--;
  counter.value = count;
}

btnPlus.addEventListener('click', () => {
  let count = +counter.value
  count++;
  counter.setAttribute('value', count);
  counter.value = count;
});

btnMinus.addEventListener('click', handlerMinus);
