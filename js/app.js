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

function buildMenu () {
    for (const section of sectionsArray) {
        const id = section.id;
        const name = section.getElementsByTagName('h2')[0].innerText;

        const navbarElement = document.createElement('li');
        navbarElement.innerHTML = `<a href="#${id}" id="${id}-nav">${name}</a>`;
        document.getElementById('navbar__list').appendChild(navbarElement);
    }
}

// Add class "active-section" to the first section that begins below the top of the screen.
// TODO: Fix this so that the breakpoint is different. In this format, if the visible section is longer than the viewport, the next section will be active as soon as the header scrolls offscreen.
// TODO: Mark the section-nav with the class "active-section" so that the menu is the thing that changes.

function findActive () {
    let activeIsFound = false;
    for (section of sectionsArray) {
        if (section.getBoundingClientRect()['y'] > 0 && activeIsFound == false) {
            section.classList.add('active-section');
            activeIsFound = true;            
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

buildMenu;

// Scroll to section on link click



// Set sections as active

window.addEventListener('scroll', findActive);

