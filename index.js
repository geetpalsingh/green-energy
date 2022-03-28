// references to active HTML elements
const resources = {
    btns: document.querySelectorAll('.controls ul li button'),
    dc: document.querySelector('.dynamic-content')
};

// database:
const contents = {
    c1: {
        heading: 'Tax Credits',
        bodyText: 'Providing tax credits to those who invest in and produce renewable energy sources would generate a willingness to transition to energy efficient resources like solar and wind power. With the money saved by tax credits, developers and investors would see their investments paid off.',
        imageUrl: 'img/tax.png',
        imageAlt: 'alternative text for image 1'
    },
    c2: {
        heading: 'Federal Assistance Funds',
        bodyText: 'Many governments assist lower-income communities and organizations with funds already. Now, they’re investing in renewable energy sources and energy efficient systems to bring lower energy costs and increased public welfare.Examples of such programs include the Department of Health and Human Services’ Low Income Home Energy Assistance Program (LIHEAP) and the Department of Energy’s Weatherization Assistance Program (WAP). In addition to direct investment, they also assist through grants and development programs.',
        imageUrl: 'https://images.unsplash.com/photo-1621378864046-0122e4a415a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
        imageAlt: 'alternative text for image 2'
    },
    c3: {
        heading: 'Community Solar',
        bodyText: 'A community solar project, or solar garden, is a collection of solar panels whose energy is shared by multiple houses. The solar garden would power each home’s water, heat and electricity while the entire community would split the lower energy costs.They can be implemented by a few or multiple individuals within a community. Community solar projects have benefited many lower-income communities in places like Denver, Colorado. Plus, they’re growing in popularity. It’s expected in America for 50 percent of the solar energy market to come from solar communities in the next few years. As we move forward, solar energy makes sense.',
        imageUrl: 'https://images.unsplash.com/photo-1594818379496-da1e345b0ded?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80',
        imageAlt: 'alternative text for image 3'
    }
};

// loading initial content (on the page load)
resources.dc.innerHTML = `<h2>${contents.c1.heading}</h2>
                            <div class="img-n-text">
                                <figure class="sol-img">
                                <img src="${contents.c1.imageUrl}" alt="${contents.c1.imageAlt}" class="theimg" /> 
                                </figure>
                                <p class="info">${contents.c1.bodyText}</p> 
                            </div>
                            `;

// updatting content based on the button click
let handleClick = e => {

    e.preventDefault();

    let activeItem = e.target;

    for (let item of resources.btns) {
        if (item.id) {
    
            item.removeAttribute('id');
        }
    }

    // fetch the reference to the current button
    let currentButton = e.target;

    // extract the value of data-attribute
    // MDN Reference: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset
    let currentContent = currentButton.dataset.btn;

    // update the content
    resources.dc.innerHTML = `<h2>${contents[currentContent].heading}</h2>
                                <div class="img-n-text">
                                    <figure class="sol-img">
                                    <img src="${contents[currentContent].imageUrl}" alt="${contents[currentContent].imageAlt}" class="theimg" /> 
                                    </figure>
                                    <p class="info">${contents[currentContent].bodyText}</p>
                                </div> 
                                `;

    activeItem.id = 'active';


};

// register all 3 buttons for click event
for (let btn of resources.btns) {
    btn.addEventListener('click', handleClick);
}






/*
// code aside refreshing assoc arrays/objects
let person = {
    firstName: 'Dan',
    lastName: 'Gibson'
};

let person = {
    'firstName': 'Dan',
    'lastName': 'Gibson'
};

console.log(person.firstName); // prints: Dan
console.log(person["firstName"]); // prints: Dan
*/









