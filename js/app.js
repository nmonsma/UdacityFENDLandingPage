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

const sectionsArray = document.getElementsByTagName('section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

function elementIsNearTop(element) {
    const y = element.getBoundingClientRect()['y'];
    if (y < 200 && y > 0) {
        return true;
    } else {
        return false;
    }
}




/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

for (const section of sectionsArray) {
    const id = section.id;
    const name = section.getElementsByTagName('h2')[0].innerText;

    const navbarElement = document.createElement('li');
    navbarElement.innerHTML = `<a href="#${id}">${name}</a>`;
    document.getElementById('navbar__list').appendChild(navbarElement);
}


// Add class 'active' to section when near top of viewport


// TODO: Change this function so that "active-section" is a class added to exactly ONE element. 
// The EventListener function will have to include two for-loops: one to loop through and find the element that is most "near the top"--the one with the smallest nonzero y.
// the secton loop will then have to apply the... Wait, since the elements will be in ascending-y order, the loop just needs to look for the first non-zero y, and then remove "active" from all the others.
window.addEventListener('scroll', function () {
    for (section of sectionsArray) {
        if elementIsNearTop(section) {
            section.classList.add('active-section');
        } else {
            section.classList.remove('active-section');        
        }
    }
}




// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


