'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnsOpenModal = document.querySelectorAll('.show-modal');
const imageModel = document.querySelector('.image');
console.log(btnsOpenModal);
const btnsCloseModal = document.querySelector('.close-modal');
const greetingsHidden = document.querySelector('.greetings ');
const showingThings = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
  imageModel.classList.remove('hidden');
};
const hiddenThings = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', showingThings); // function () {
  //     modal.classList.remove('hidden');
  //     overlay.classList.remove('hidden');
  //   });
}
btnsCloseModal.addEventListener('click', hiddenThings); // function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// });
overlay.addEventListener('click', hiddenThings); // function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// });
document.querySelector('.shows-model').addEventListener('click', function () {
  modal.classList.remove('hidden');
  // overlay.classList.remove('hidden');
});
// document.addEventListener('keydown', function (e) {
//   console.log(e.key);
//   if (e.key === 'A') {
//     if (modal.classList.add('hidden')) {
//       hiddenThings();
//     }
//   }
// });
document.addEventListener('keydown', function (e) {
  console.log(e.key);
  if (e.key === 'A') {
    if (
      !modal.classList.contains('hidden') &&
      !overlay.classList.contains('hidden')
    ) {
      hiddenThings();
    }
  }
});
