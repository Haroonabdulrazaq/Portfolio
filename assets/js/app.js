const navList = document.querySelector('.navigation__list');
const container = document.querySelector('.container');
const checkbox = document.querySelector('.navigation__checkbox');

navList.addEventListener('click', () => {
  checkbox.checked = false;
});

container.addEventListener('click', () => {
  checkbox.checked = false;
});

let language = document.querySelector('.language')
let languageWrapper  = document.querySelector('.language-wrapper')

let framework = document.querySelector('.framework')
let frameworkWrapper = document.querySelector('.framework-wrapper')

let technology = document.querySelector('.technology')
let technologyWrapper   = document.querySelector('.technology-wrapper')

let softSkill = document.querySelector('.soft-skills')
let softWrapper = document.querySelector('.soft-wrapper')


let contentWrapper = document.querySelector('.content-wrapper')
let arrow = document.querySelector('.fa-arrow-down')
let lang  = document.querySelector('.lang')
let frame  = document.querySelector('.frame')
let tech  = document.querySelector('.tech')
let soft  = document.querySelector('.soft')

const toggler = (wrapper, icon)=>{
  wrapper.classList.toggle('hide');
  icon.classList.toggle('rotate-side');
}

  language.addEventListener('click',(e)=>{
    e.preventDefault();
    toggler(languageWrapper, lang)
  } )

  framework.addEventListener('click', (e)=>{
  e.preventDefault();
  toggler(frameworkWrapper, frame)
  })
  
  technology.addEventListener('click', (e)=>{
   e.preventDefault();
   toggler(technologyWrapper, tech)
   })

   softSkill.addEventListener('click', (e)=>{
    e.preventDefault();
    toggler(softWrapper, soft)
    })
