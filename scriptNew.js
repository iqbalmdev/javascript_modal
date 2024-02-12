'use strict';
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close-modal');
const btnshowModal = document.querySelectorAll('.show-modal');
const showFunction = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closeFunction = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
const overlay = document.querySelector('.overlay');
for (let i = 0; i < btnshowModal.length; i++) {
  btnshowModal[i].addEventListener('click', showFunction);
}
closeModal.addEventListener('click', closeFunction);
overlay.addEventListener('click', closeFunction);

document.addEventListener('keydown', function (e) {
  if (e.key == 'X' && !modal.classList.contains('hidden')) {
    closeFunction();
  }
  console.log('key was pressed');
});
