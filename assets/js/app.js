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


let contentWrapper = document.querySelectorAll('.content-wrapper')
let arrow = document.querySelector('.fa-arrow-down')
let lang  = document.querySelector('.lang')
let frame  = document.querySelector('.frame')
let tech  = document.querySelector('.tech')
let soft  = document.querySelector('.soft')



const adder = (wrapper, icon)=> {
  wrapper.classList.add('hide');
  icon.classList.remove('rotate-side');
}

const toggler = (wrapper, icon)=> {
  wrapper.classList.toggle('hide');
  icon.classList.toggle('rotate-side');
}

  language.addEventListener('click',(e)=> {
    e.preventDefault();
   if(!e.target.matches('skills language')){
    toggler(languageWrapper, lang) 
    adder(frameworkWrapper, frame)
    adder(technologyWrapper, tech)
    adder(softWrapper, soft)
   } 
  })
  framework.addEventListener('click', (e)=>{
    e.preventDefault();
    if(!e.target.matches('skills framework')){
      toggler(frameworkWrapper, frame)
      adder(languageWrapper, lang)
      adder(technologyWrapper, tech)
      adder(softWrapper, soft)
     }   
  })
  technology.addEventListener('click',(e)=> {
    e.preventDefault();
    if(!e.target.matches('skills technology')){
      adder(languageWrapper, lang)
      adder(frameworkWrapper, frame)
      adder(softWrapper, soft)
      toggler(technologyWrapper, tech)
    }
  })
  softSkill.addEventListener('click', (e)=>{
    e.preventDefault();
    if(!e.target.matches('skills softSkill')){
      adder(languageWrapper, lang)
      adder(frameworkWrapper, frame)
      adder(technologyWrapper, tech)
      toggler(softWrapper, soft)
    }
  })
 