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


//TODO: Build this function to find the a links that link to id targets...?
function findIdLinks () {
    const links = document.querySelector()

}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// Build the nav by cycling through the sections and creating links in the nav for each section based on the content of its h2 tag.

function buildMenu () {
    for (const section of sectionsArray) {
        const id = section.id;
        const name = section.getElementsByTagName('h2')[0].innerText;

        const navbarElement = document.createElement('li');
        navbarElement.innerHTML = `<a href="#${id}" id="${id}-nav">${name}</a>`;
        document.getElementById('navbar__list').appendChild(navbarElement);
    }
}

// When the browser scrolls, check to see if any of the sections start within 100px of the top of the viewport.
// If one does, then cycle through all the sections, removing the "active" classes from the sections and nav links.
// Add the "active" classes to the near-the-top section and its nav link.

function findActive () {
    for (section of sectionsArray) {
        if (section.getBoundingClientRect()['y'] > -100 && section.getBoundingClientRect()['y'] < 100) {
            for (sectionForRemoval of sectionsArray) {
                const headerId = `${sectionForRemoval.id}-nav`;
                sectionForRemoval.classList.remove('active-section');
                document.getElementById(headerId).classList.remove('active-nav');
            }
            const headerId = `${section.id}-nav`;
            section.classList.add('active-section');
            document.getElementById(headerId).classList.add('active-nav');
            break;
        }
    }   
}


// Scroll to anchor ID using scrollTO event
//TODO: the offsetTop seems to be the top y of the element. Check this in the console.

function smoothScroll (target) {
    const location = target.offsetTop;
    window.scrollTo(0, location);
}

/**
 * End Main Functions
 * Begin Events
 * 
*/


// Build menu 

buildMenu ();

// Scroll to section on link click



// Set sections as active

window.addEventListener('scroll', findActive);

