// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    //Created New Elements
    const mainHeader = document.createElement('div');
    const mainDate = document.createElement('span');
    const mainHeadingText = document.createElement('h1');
    const mainTemp = document.createElement('span');

    // Created Classes for the Elements.
    mainHeader.classList.add('header');
    mainDate.classList.add('date');
    mainTemp.classList.add('temp');

    //add the text content
    mainDate.textContent = 'March 28, 2019';
    mainHeadingText.textContent = 'Lambda Times';
    mainTemp.textContent = '98°';

    //appending 
    mainHeader.appendChild(mainHeadingText);
    mainHeader.appendChild(mainDate);
    mainHeader.appendChild(mainTemp);

    //return here 
    return mainHeader;
}

//adding to the dom 
const headerToDom = document.querySelector('.header-container');
headerToDom.appendChild(Header());