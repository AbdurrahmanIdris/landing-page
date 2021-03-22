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
const sectionsList = document.querySelectorAll('section');
const navBarList = document.getElementById("navbar__list");
const numOfSections = sectionsList.length //I'll use this variable to calculate the width of the li element style
const sectionWidth = (100 / numOfSections);
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
for (let index = 1; index <= sectionsList.length; index++){
  const newListItem = document.createElement('li');
  const newAnchor = document.createElement('a');
  const sectionTitle = `Section ${index}`;
  newAnchor.href = `#section${index}`;
  newAnchor.innerText = sectionTitle;
  newListItem.appendChild(newAnchor);
  navBarList.appendChild(newListItem);
};

//changing the style.width of each li element automatically
const liArr = document.getElementsByTagName("LI");
for(let i = 0; i < liArr.length; i++) {
  const parent = liArr[i].parentNode;
  if(parent != null && parent.id == "navbar__list") {
    liArr[i].style.width = sectionWidth + "%";
  };        
};

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


