const navList = document.querySelector('.navigation__list');
const container = document.querySelector('.container');
const checkbox = document.querySelector('.navigation__checkbox');

navList.addEventListener('click', () => {
  checkbox.checked = false;
});

container.addEventListener('click', () => {
  checkbox.checked = false;
});
