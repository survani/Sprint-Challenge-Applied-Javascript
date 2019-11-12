// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
//? add to the dom using .cards-container this is a div that will hold everything I do below ( show it ).
const theContainerOfCards = document.querySelector('.cards-container');
console.log('theContainerOfCards: ', theContainerOfCards); //* works! adds what I wanted.

//? axios starts below.

axios
 .get('https://lambda-times-backend.herokuapp.com/articles')
 .then(response => {
     console.log('response: ', response);

     //? I will start to grab the data for all the articles here one by one then using the .forEach to iterate over the data.
    response.data.articles.bootstrap.forEach(elements => {
    theContainerOfCards.appendChild(allCards(elements));
    });
    response.data.articles.jquery.forEach(elements => {
    theContainerOfCards.appendChild(allCards(elements));
    });
    response.data.articles.node.forEach(elements => {
    theContainerOfCards.appendChild(allCards(elements));
    });
    response.data.articles.technology.forEach(elements => {
    theContainerOfCards.appendChild(allCards(elements));
    });
    response.data.articles.javascript.forEach(elements => {
    theContainerOfCards.appendChild(allCards(elements));
    });

    })


    //? function holds everything below 
function allCards (data) {

    //? Create all elements based on the html code above.
    const mainCards = document.createElement('div');
    const mainHeadline = document.createElement('div');
    const mainAuthor = document.createElement('div');
    const mainImgContainer = document.createElement('div');
    const mainImgOfcard = document.createElement('img');
    const mainCardAuthorName = document.createElement('span');

    //? add the classList for all the elements that need it.
    mainCards.classList.add('card');
    mainHeadline.classList.add('headline');
    mainAuthor.classList.add('author');
    mainImgContainer.classList.add('img-container');

    //? add the text content.
    mainHeadline.textContent = data.headline;
    mainImgOfcard.src = data.authorPhoto; //This is useing .src not .textContent...
    mainCardAuthorName.textContent = data.authorName;

    //? appending
    mainCards.appendChild(mainHeadline);
    mainCards.appendChild(mainAuthor);
    mainAuthor.appendChild(mainImgContainer);
    mainAuthor.appendChild(mainCardAuthorName);
    mainImgContainer.appendChild(mainImgOfcard);
    

    //? return here.
    return mainCards; // returns the div holding everything. 
}
