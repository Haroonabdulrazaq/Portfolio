const navList = document.querySelector('.navigation__list');
const container = document.querySelector('.container');
const checkbox = document.querySelector('.navigation__checkbox');

navList.addEventListener('click', () => {
  checkbox.checked = false;
});

container.addEventListener('click', () => {
  checkbox.checked = false;
});

const language = document.querySelector('.language');
const languageWrapper = document.querySelector('.language-wrapper');

const framework = document.querySelector('.framework');
const frameworkWrapper = document.querySelector('.framework-wrapper');

const technology = document.querySelector('.technology');
const technologyWrapper = document.querySelector('.technology-wrapper');

const softSkill = document.querySelector('.soft-skills');
const softWrapper = document.querySelector('.soft-wrapper');

const lang = document.querySelector('.lang');
const frame = document.querySelector('.frame');
const tech = document.querySelector('.tech');
const soft = document.querySelector('.soft');


const adder = (wrapper, icon) => {
  wrapper.classList.add('hide');
  icon.classList.remove('rotate-side');
};

const toggler = (wrapper, icon) => {
  wrapper.classList.toggle('hide');
  icon.classList.toggle('rotate-side');
};

language.addEventListener('click', (e) => {
  e.preventDefault();
  toggler(languageWrapper, lang);
  adder(frameworkWrapper, frame);
  adder(technologyWrapper, tech);
  adder(softWrapper, soft);
});
framework.addEventListener('click', (e) => {
  e.preventDefault();
  toggler(frameworkWrapper, frame);
  adder(languageWrapper, lang);
  adder(technologyWrapper, tech);
  adder(softWrapper, soft);
});
technology.addEventListener('click', (e) => {
  e.preventDefault();
  adder(languageWrapper, lang);
  adder(frameworkWrapper, frame);
  adder(softWrapper, soft);
  toggler(technologyWrapper, tech);
});
softSkill.addEventListener('click', (e) => {
  e.preventDefault();
  adder(languageWrapper, lang);
  adder(frameworkWrapper, frame);
  adder(technologyWrapper, tech);
  toggler(softWrapper, soft);
});

const submitBtn = document.querySelector('.send-btn');
const paperPlane = document.querySelector('.fa-paper-plane');
const loader = document.querySelector('.loader');
const ok = document.querySelector('.ok');


submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  loader.classList.remove('hide');
  paperPlane.classList.add('fly-plane');
});


ok.addEventListener('click', (e) => {
  e.preventDefault();
  loader.classList.add('hide');
  paperPlane.classList.remove('fly-plane');
});