const InputEl = document.querySelector('input');
const ButtonEl = document.querySelector('button');
const ulEl = document.querySelector('ul');

ButtonEl.addEventListener('click', () => {
  console.log(InputEl.value);
  const liEl = document.createElement('li');
  liEl.textContent = InputEl.value;
  ulEl.appendChild(liEl)
  InputEl.value ="";

});