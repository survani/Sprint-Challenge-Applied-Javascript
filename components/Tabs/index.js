// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
//!------------------------------------INSTRUCTIONS ABOVE --------------------------------------------

//? axios here
axios
    .get('https://lambda-times-backend.herokuapp.com/topics')
    .then(response => {
        console.log('response: ', response); //* returns successful data..
        response.data.topics.forEach(singlElement => {
            console.log('response.data.topics: ', response.data.topics); //* Returns five topics in the data. (works!)
            tab.appendChild(elementTabs(singlElement))
        });
        
    })

    //? function here
    function elementTabs(mainTopics) {
        //? creating elements
        const elementTab = document.createElement('div');

        //? adding the text content
        elementTab.textContent = `${mainTopics}`;

        //? adding the class
        elementTab.classList.add('tab')

        //? return here
        return elementTab;

    }

//? adding to dom under .topics
const tab = document.querySelector('.topics');
console.log('tab: ', tab); //*displays all the tabs I want inside the trending topics section.

//! Note: I had a lot of fun doing this sprint. I am happy that I understand what to do. I am not 100%, but I am always working hard to get better.

