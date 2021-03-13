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

// Build the nav by cycling through the sections and creating links in the nav for each section based on the content of its h2 tag.
// Set the onclick event attribute of each link to use the smoothScroll function.

function buildMenu () {
    const navbarList = document.getElementById('navbar__list');
    navbarList.innerHTML = '';
    for (const section of sectionsArray) {
        const id = section.id;
        const name = section.getElementsByTagName('h2')[0].innerText;
        const targetLocation = section.offsetTop;
        const navbarElement = document.createElement('li');
        const navbarLink = document.createElement('a');
        navbarLink.setAttribute('id', `${id}-nav`);
        navbarLink.setAttribute('class', 'menu__link');
        navbarLink.setAttribute('onclick', `window.scrollTo({top: ${targetLocation}, behavior: 'smooth'})`);
        navbarLink.innerText = name;
        navbarElement.appendChild(navbarLink);
        navbarList.appendChild(navbarElement);
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


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build the menu with the smooth scrolling action. Wait half a second so that the calculation of the scroll targets is not premature.

window.setTimeout(buildMenu, 500);

// Rebuilds the menu on resize so that the targets are recalculated.

window.addEventListener('resize', buildMenu);

// Set sections as active

window.addEventListener('scroll', findActive);

