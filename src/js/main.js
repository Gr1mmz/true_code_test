import '../scss/main.scss';
import '../index.html';

//HAMBURGER

const hamBtn = document.querySelector('.burger');
const hamMenu = document.querySelector('.hamburger-menu');
hamBtn.addEventListener('click', () => {
  hamMenu.classList.add('active');
  document.querySelector('body').style.overflow = 'hidden';
});

hamMenu.addEventListener('click', (e) => {
  e.stopPropagation();
  if (e.target.classList.value === 'hamburger-menu__item'
    || e.target.classList.value === 'hamburger-menu__close'
    || e.target.classList.value === 'hamburger-menu active') {
    hamMenu.classList.remove('active');
    document.querySelector('body').style.overflow = 'auto';
  }
})

//ENTRY DATEPICKER

const dateEntryInput = document.querySelector('#entryDate');
const textEntryInput = document.querySelector('.datepicker__entry-date');
dateEntryInput.addEventListener('change', event => {
  textEntryInput.textContent = dateEntryInput.value.split('-').reverse().join('.');
});

//LEFT DATEPICKER

const dateLeftInput = document.querySelector('#leftDate');
const textLeftInput = document.querySelector('.datepicker__left-date');
dateLeftInput.addEventListener('change', event => {
  textLeftInput.textContent = dateLeftInput.value.split('-').reverse().join('.');
});

//CUSTOM SELECT

const customSelect = document.querySelector('.select');
const customSelectWrapper = document.querySelector('.select__wrapper');
const customSelectOptions = document.querySelectorAll(".select__option");

customSelect.addEventListener('click', () => {
  customSelectWrapper.classList.toggle('open');
});

for (const option of customSelectOptions) {
  option.addEventListener('click', function() {
    if (!this.classList.contains('selected')) {
      this.parentNode.querySelector('.select__option.selected').classList.remove('selected');
      this.classList.add('selected');
      this.closest('.select').querySelector('.select__trigger .select__guests').textContent = this.textContent;
    }
  })
}


