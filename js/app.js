/*
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
*/

/*
 * Define Global Variables
*/

const sections   = document.querySelectorAll('section');      //NodeList of all sections on the main page, this variable will be used in for loops to iterate section by section
const navbarList = document.getElementById('navbar__list');   //This is a reference for the ul that will be used to append created <li> to it.

/*
 * End Global Variables
*/




/* 
 * Start Helper Functions 
*/

//This function will be used to show if the section inside the viewport or not
function isInViewPort(element){
  const position = element.getBoundingClientRect();
  return (position.top >= 0 && position.top < 0.5 * window.innerHeight); //I put the RHS of the (&&) because I see it's better to consider section in view port when its top line exceeds the half of the window
};  //End function

/*
 * End Helper Functions
*/



/*
 * Begin Main Functions
*/

// build the nav
function createNavbarListItems(){
  for(let section of sections){
    const sectionName   = section.getAttribute('data-nav'); //I pulled section name from data-nav attribute because it's written in a good english with spaces.
    const sectionAnchor = section.getAttribute('id');       //logically enough the id will be used as the anchor as it's unique
    const newLi         = document.createElement('li');     //now we create the new element li and in the following line we will fill it
    newLi.innerHTML     = `<a data-section-id="${sectionAnchor}" class="menu__link">${sectionName}</a>`;  //I used data-section-id instead of href for two reasons #1 to use js to scroll & #2 because it's the same id of the section.
    navbarList.appendChild(newLi);
  };  //End for
};  //End function

// Add class 'active' to section when near top of viewport
function toggleActiveClass(section){
  for(let section of sections){
    if (isInViewPort(section)){
      if(!section.classList.contains("your-active-class")){
        section.classList.add("your-active-class");
      }; //End if
    } else{ //Else isn'tInViewPort so we will delete "your-active-class"
      section.classList.remove("your-active-class");
    };  //End if-else
  };  //End for
};  //End function

// Scroll to anchor ID using scrollTO event
function scroll(link){                                                                //function is given an input link, it's the link inside navigation bar
  link.addEventListener('click', function respond(evt){                               //When link inside nav bar is clicked do the following
    const element = document.getElementById(link.getAttribute("data-section-id"));    //we get the attribute "data-section-id" from the clicked link and it's matched with a section      
    element.scrollIntoView({behavior: "smooth"});                                     //Go to the desired section through scrolling
  }) //End function respond
};  //End function scroll

/*
 * End Main Functions
*/


/*
 * Begin Events
*/

// Build menu 
createNavbarListItems();    

// Scroll to section on link click
const navbarItems = document.querySelectorAll(".menu__link");
navbarItems.forEach(scroll);

// Set sections as active
document.addEventListener('scroll',toggleActiveClass);

/*  
 * End Events
*/
