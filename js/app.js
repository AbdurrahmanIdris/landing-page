/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const sections = document.querySelectorAll('section');
const navMenu = document.getElementById("navbar__list");
/**
 * End Global Variables
 * 
 * 
 * 
 * 
 * 
 * Start Helper Functions
 * 
*/
function isInViewPort(element){
  const position = element.getBoundingClientRect();
  return (position.top >= 0 && position.top < 0.5 * window.innerHeight);
};
/**
 * End Helper Functions
 * 
 * 
 * 
 * 
 * 
 * Begin Main Functions
 * 
*/
// build the nav
function createNavMenuItems(){
  for(section of sections){
    const sectionName = section.getAttribute('data-nav');
    const sectionAnchor = section.getAttribute('id');
    const newLi = document.createElement('li');
    newLi.innerHTML = `<a href="#${sectionAnchor}" class="menu__link">${sectionName}</a>`;
    navMenu.appendChild(newLi);
  };
};

// Add class 'active' to section when near top of viewport
function toggleActiveClass(section){
  for(section of sections){
    if (isInViewPort(section)){
      if(!section.classList.contains("your-active-class")){
        section.classList.add("your-active-class");
      };
    } else{
      section.classList.remove("your-active-class");
    };
  };
};

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * 
 * 
 * 
 * 
 * 
 * Begin Events
 * 
*/

// Build menu 
createNavMenuItems();
// Scroll to section on link click

// Set sections as active
document.addEventListener('scroll',toggleActiveClass);

