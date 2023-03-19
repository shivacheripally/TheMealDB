// Retrieve the favorite meals from local storage or set an empty array if there are none
let myFavoriteMeals = JSON.parse(localStorage.getItem('myFavoriteMeals')) || [];

// Select the modal body and search box elements from the DOM
const myFavorites = document.querySelector('.modal-body');
const searchBox = document.querySelector('.search-box');

// Set initial styles for myFavorites container
myFavorites.style.display = 'flex';
myFavorites.style.flexDirection = 'column';
myFavorites.style.justifyContent = 'space-between';
myFavorites.style.alignItems = 'center';
myFavorites.style.backgroundColor = '#2d2013';

// Declare variables to store meal information
let newMealThumb, newStrMeal;

function displayLatestMeals(inputValue, keyPressed) {
  const Container = document.querySelector('.container');
  // Set initial styles for container
  Container.style.display = 'flex';
  Container.style.flexWrap = 'wrap';
  Container.style.justifyContent = 'space-between';
  Container.style.textAlign = 'center';
  Container.style.alignItems = 'center';


  // Clear existing content in container
  Container.innerHTML = '';

  // Check if the search input is not empty
  if (inputValue.trim() !== '') {
    // Fetch the meals data from the API using the search term entered by the user
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`)
      .then(response => response.json())
      .then(data => {
        // Check if any meals are returned from the API
        if (data.meals) {
          // Loop through all the meals returned by the API
          data.meals.forEach(meal => {
            // Get the name of the meal
            const strMeal = `${meal.strMeal}`;

            // Create a new div element to display the meal details
            const mealElement = document.createElement('div');
            mealElement.style.width = "23%";
            mealElement.style.height = 'auto';
            mealElement.style.display = 'flex';
            mealElement.style.flexDirection = 'column';
            mealElement.style.alignItems = 'center'; // Center elements horizontally
            mealElement.style.justifyContent = 'center'; // Center elements vertically
            mealElement.style.backgroundColor = 'white';
            mealElement.style.marginTop = '20px';

            // Create an image element to display the meal thumbnail
            const mealImage = document.createElement('img');
            mealImage.src = `${meal.strMealThumb}`;
            mealImage.style.width = '100%';
            mealImage.style.height = '100%';
            mealImage.setAttribute('id', 'img');

            // Add a click event listener to the image element
            mealImage.addEventListener('click', () => {
              // Set the selected meal name and thumbnail
              newStrMeal = strMeal; //data.meals[0].strMeal + ' loved!';
              newMealThumb = `${meal.strMealThumb}`;//data.meals[0].strMealThumb.replace('thumb', 'preview');
            });

            // Create a new div element to display the love icon and meal name
            const divLove = document.createElement('div');
            divLove.style.marginTop = '10px';
            divLove.style.marginBottom = '10px';
            divLove.style.display = 'flex';
            divLove.style.alignItems = 'center';
            divLove.style.justifyContent = 'space-between';
            divLove.style.width = '100%';
            divLove.style.height = 'auto';
            divLove.style.textAlign = 'center';

            // Create a new span element to display the meal name
            const mealText = document.createElement('span');
            mealText.innerHTML = strMeal;
            mealText.style.marginLeft = '10px';
            mealText.style.color = 'black';
            mealText.style.textAlign = 'center';

            // Create a new span element to display the love icon
            const love = document.createElement('span');
            love.innerHTML = '<i id="heart" class="fas fa-heart"></i>';
            love.style.marginRight = '10px';
            love.style.textAlign = 'center';

            // Check if the meal is already in the favorite list and set the love icon color accordingly
            if (toFill(strMeal) === true) {
              love.style.color = 'red';
            }
            else love.style.color = 'grey';
            love.style.fontSize = 'x-large';

            // Add a click event listener to the love icon
            love.addEventListener('click', () => {
              // Set the selected meal name and thumbnail
              newStrMeal = strMeal; //data.meals[0].strMeal + ' loved!';
              newMealThumb = `${meal.strMealThumb}`;//data.meals[0].strMealThumb.replace

            });
            //appending text, icon to subdivs
            divLove.appendChild(mealText);
            divLove.appendChild(love);

            //appending our subdivs into the mealElement div
            mealElement.appendChild(mealImage);
            mealElement.appendChild(divLove);

            //media queries
            // This function changes the layout of a webpage depending on the width of the window
            function sizeChange() {
              // Get the outer width of the window and store it in the variable "size"
              let size = window.outerWidth;

              // Check if the size is less than 768 pixels
              if (size < 768) {
                // If the window width is less than 767px, stack elements vertically and center them
                Container.style.flexDirection = 'column'; // Set the container's flex direction to column
                Container.style.justifyContent = 'center'; // Center the container's contents vertically
                Container.style.alignItems = 'center'; // Center the container's contents horizontally
                Container.style.textAlign = 'center'; // Center the text within the container
                mealElement.style.width = '90%'; // Set the width of the meal element to 100%
                mealElement.style.height = 'auto'; // Set the height of the meal element to auto
                mealImage.style.width = '100%'; // Set the width of the meal image to 90%
                mealImage.style.height = '100%'; // Set the height of the meal image to 90%
                divLove.style.width = '100%'; // Set the width of the divLove element to 90%
                mealText.style.marginLeft = '20px'; // Set the left margin of the meal text to 20px
                love.style.marginBottom = '20px'; // Set the bottom margin of the love element to 20px
              }
              else {
                // If the window width is greater than or equal to 767px, display elements side by side and center them
                Container.style.display = 'flex'; // Set the container's display to flex
                Container.style.flexWrap = 'wrap'; // Allow the container's contents to wrap onto multiple lines
                Container.style.flexDirection = 'row'; // Set the container's flex direction to row
                Container.style.justifyContent = 'space-between'; // Distribute the container's contents evenly with space between them
                Container.style.alignItems = 'center'; // Center the container's contents horizontally
                mealElement.style.width = '23%'; // Set the width of the meal element to 23%
                mealElement.style.height = 'auto'; // Set the height of the meal element to auto
                mealImage.style.width = '100%'; // Set the width of the meal image to 100%
                mealImage.style.height = '100%'; // Set the height of the meal image to 100%
                divLove.style.width = '100%'; // Set the width of the divLove element to 100%
                mealText.style.marginLeft = '10px'; // Set the left margin of the meal text to 10px
                love.style.marginBottom = '10px'; // Set the bottom margin of the love element to 10px
              }
            }

            // Call the sizeChange function whenever the window is resized
            window.addEventListener('resize', function (event) {
              sizeChange();
            });

            // Call the sizeChange function once when the page loads to set the initial layout
            sizeChange();

            //append the mealElement which contains img, text, icon etc
            Container.appendChild(mealElement);
          });
        }
        // If there are no search results, display a message in the center of the container
        else {
          // Center the contents of the container vertically
          Container.style.justifyContent = 'center';

          // Create a new span element to hold the "No meals found" message
          const noResults = document.createElement('h3');
          noResults.innerHTML = "No meals found go to home search again";
          noResults.style.textAlign = 'center';
          noResults.style.color = 'white'; // Set the color of the text to white
          noResults.style.marginTop = '20px'; // Add a top margin of 20px to the span element
          noResults.style.marginBottom = '30px'; // Add a bottom margin of 30px to the span element

          // Add the "No meals found" message to the container
          Container.appendChild(noResults);
        }

      })
      //If an error occurs, the error object is logged to the console
      .catch(error => console.error(error));
  }
}

function toFill(str) {
  // loop through the myFavoriteMeals array
  for (let i = 0; i < myFavoriteMeals.length; ++i) {
    // check if the lowercase imgName property of each object matches the lowercase str parameter
    if (myFavoriteMeals[i].imgName.toLowerCase() === str.toLowerCase()) {
      // if there is a match, return the value of the loved property of that object
      return myFavoriteMeals[i].loved;
    }
  }
  // if no match is found, return false
  return false;
}


function debounce(func, timeout) {
  let timer; // declare a variable for the timer
  return function executedFunction(...args) { // return a new function with the spread operator to receive any number of arguments
    const context = this; // save the context of the function
    const later = function () { // declare a function to be called later
      timer = null; // set the timer to null
      func.apply(context, args); // call the original function with the saved context and arguments
    };
    clearTimeout(timer); // clear the timer to prevent the original function from executing immediately
    timer = setTimeout(later, timeout); // set the timer to run the later function after the specified timeout
  };
}


// define a new function that will be created by calling the "debounce" function with two arguments: "displayLatestMeals", which is expected to be a function, and 500, which is a number representing the debounce time in milliseconds
const debouncedDisplayLatestMeals = debounce(displayLatestMeals, 500);

// select the HTML element with the class "search" and add an event listener for the "keyup" event
const search = document.querySelector('.search');
search.addEventListener('keyup', (event) => {
  const inputValue = search.value.toLowerCase(); // get the value of the search input and convert it to lowercase
  debouncedDisplayLatestMeals(inputValue, event.key); // call the "debouncedDisplayLatestMeals" function with the lowercase input value and the key that was pressed
});

// define a function called "getIndex" that takes a string parameter called "str"
function getIndex(str) {
  // loop through an array called "arrNames"
  for (let i = 0; i < arrNames.length; ++i) {
    // check if the lowercase version of the current array element matches the lowercase "str" parameter
    if (arrNames[i].toLowerCase() === str.toLowerCase()) {
      // if there is a match, return the index of the current element
      return i;
    }
  }
  // if no match is found, return -1
  return -1;
}


// define a function called "isAvailable" that takes two parameters: a string called "str" and a target element to change its style
function isAvailable(str, target) {
  // loop through an array called "myFavoriteMeals"
  for (let i = 0; i < myFavoriteMeals.length; ++i) {
    // check if the lowercase version of the "imgName" property of the current array element matches the lowercase "str" parameter
    if (myFavoriteMeals[i].imgName.toLowerCase() === str.toLowerCase()) {
      // toggle the value of the "loved" property of the current array element
      myFavoriteMeals[i].loved = !myFavoriteMeals[i].loved;
      // check if the "loved" property of the current array element is now true
      if (myFavoriteMeals[i].loved === true) {
        // if it is, show a notification that the meal has been added to favorites and change the color of the target element to red
        showNotification(`${str} Added To My Favorites`);
        target.style.color = 'red';
      }
      else {
        // if it is not, show a notification that the meal has been removed from favorites and change the color of the target element to grey
        showNotification(`${str} Removed From My Favorites`);
        target.style.color = 'grey';
      }
      // return true to indicate that the function was successful
      return true;
    }
  }
  // if the function has not yet returned, return false to indicate that the string was not found in the array
  return false;
}


// define a function called "isEmpty" that takes no parameters
function isEmpty() {
  // loop through an array called "myFavoriteMeals"
  for (let i = 0; i < myFavoriteMeals.length; ++i) {
    // check if the "loved" property of the current array element is true
    if (myFavoriteMeals[i].loved === true) {
      // if it is, return false to indicate that the array is not empty
      return false;
    }
  }
  // if the function has not yet returned, it means none of the array elements have a "loved" property of true, so the array is empty. Return true to indicate this.
  return true;
}


function renderFav() {
  const e = isEmpty();
  if (isEmpty(e)) {
    // const emptyDiv = document.createElement('div');
    myFavorites.innerHTML = '';
    const mealText = document.createElement('h1');
    mealText.innerHTML = 'Start adding your favorite meals to see them here!';
    mealText.style.textAlign = 'center';
    mealText.style.padding = '10px';
    mealText.style.color = 'white';
    myFavorites.appendChild(mealText);
    // myFavorites.appendChild(emptyDiv);
    return;
  }

  myFavorites.innerHTML = '';

  for (let i = 0; i < myFavoriteMeals.length; ++i) {
    //write all functions to display them 
    if (myFavoriteMeals[i].loved === true) {

      // Create a new div element to hold the meal information
      const mealElement = document.createElement('div');
      mealElement.style.width = "90%";
      mealElement.style.height = 'auto';
      mealElement.style.display = 'flex';
      mealElement.style.flexDirection = 'column';
      mealElement.style.alignItems = 'center'; // Center elements horizontally
      mealElement.style.justifyContent = 'center'; // Center elements vertically
      mealElement.style.backgroundColor = 'white';
      mealElement.style.marginTop = '10px';
      mealElement.style.marginBottom = '10px';

      // Create a new image element for the meal's picture
      const mealImage = document.createElement('img');
      mealImage.src = myFavoriteMeals[i].imgSrc;
      mealImage.style.width = '100%';
      mealImage.style.height = '100%';
      mealImage.id = 'img';

      // Add event listener to the meal image element to redirect the user to the recipe page when clicked
      mealImage.addEventListener('click', () => {
        newStrMeal = myFavoriteMeals[i].imgName; //data.meals[0].strMeal + ' loved!';
        newMealThumb = myFavoriteMeals[i].imgSrc;//data.meals[0].strMealThumb.replace('thumb', 'preview');
      });

      // Create a new div element to hold the meal name and cancel button
      const divLove = document.createElement('div');
      divLove.style.marginTop = '10px';
      divLove.style.marginBottom = '10px';
      divLove.style.display = 'flex';
      divLove.style.alignItems = 'center';
      divLove.style.justifyContent = 'space-between';
      divLove.style.width = '100%';
      divLove.style.height = 'auto';
      divLove.style.textAlign = 'center';

      // Create a new span element to hold the meal name
      const mealText = document.createElement('span');
      mealText.innerHTML = myFavoriteMeals[i].imgName;
      mealText.style.marginLeft = '10px'
      mealText.style.color = 'black';
      mealText.style.textAlign = 'center';

      // Create a new span element for the cancel button
      const cancel = document.createElement('span');
      cancel.innerHTML = '<i id="cancel" class="fa-solid fa-xmark"></i>'
      cancel.style.marginRight = '10px';
      cancel.style.textAlign = 'center';
      cancel.style.color = 'red';
      cancel.style.fontSize = 'x-large';

      // Add event listener to the cancel button element to remove the meal from the favorites list when clicked
      cancel.addEventListener('click', () => {
        myFavoriteMeals[i].loved = false;
        renderFav();
        localStorage.setItem('myFavoriteMeals', JSON.stringify(myFavoriteMeals));
      });

      // Add the meal name and cancel button to the divLove element, and the image and divLove element to the mealElement div
      divLove.appendChild(mealText);
      divLove.appendChild(cancel);
      mealElement.appendChild(mealImage);
      mealElement.appendChild(divLove);

      // Add the mealElement div to the favorites list container element
      myFavorites.appendChild(mealElement);

      // Store the updated favorites list in local storage
      localStorage.setItem('myFavoriteMeals', JSON.stringify(myFavoriteMeals));
    }
  }
}

// Function to display a notification to the user
function showNotification(data) {
  window.alert(data);
}

// Function to handle key press events
function handleKeyPress(e) {
  const target = e.target;
  // Check if the target element is an input element of type text and if the Enter key was pressed
  if (target.tagName === 'INPUT' && target.type === 'text' && e.key === 'Enter') {
    // Get the search value from the input element and call the displayLatestMeals function with the search value and the key that was pressed
    const searchValue = target.value;
    displayLatestMeals(searchValue, 'Enter');
  }
}



function handleClickListener(e) {
  const target = e.target; // get the clicked element
  // If the clicked element has class 'browse-by-name-link'
  if (target.className === 'browse-by-name-link') {
    e.preventDefault(); // Prevent the default behavior of the link
    const value = e.target.textContent; // Get the text content of the clicked link
    displayLatestMeals(value, 'Enter'); // Call the function displayLatestMeals with the text content of the clicked link as the search term and 'Enter' as the key pressed
  }

  // Check if the target element of the click event has a class name of 'search-btn', or an ID of 'search-icon' or 'cancel'
  if (target.className === 'search-btn' || target.id === 'search-icon' || target.id === 'cancel') {

    // Get the value of the search box
    const searchValue = searchBox.value;
    if(searchValue.length === 0){
      return;
    }

    // Call the displayLatestMeals function with the search value and the key 'Enter'
    displayLatestMeals(searchValue, 'Enter');
  }
  // Check if the clicked element is an image
  if (target.id === 'img') {
    // Call the getMealInfo function to fetch meal data from an API
    getMealInfo(newStrMeal).then(mealData => {
      if (mealData) {
        // Select the container element and set initial styles
        const Container = document.querySelector('.container');
        Container.style.display = 'flex';
        Container.style.flexWrap = 'wrap';
        Container.style.justifyContent = 'center';
        Container.style.textAlign = 'center';
        Container.style.alignItems = 'center';

        // Clear existing content in container
        Container.innerHTML = '';

        // Create a new div element to hold the meal image and name
        const box = document.createElement('div');
        box.style.width = '100%';
        box.style.height = 'auto';
        box.style.display = 'flex';
        box.style.alignItems = 'center';
        box.style.justifyContent = 'space-evenly';
        box.style.textAlign = 'center';

        // Create a new div element to hold the meal image and append it to the box
        const mealElement = document.createElement('div');
        mealElement.style.width = "40%";
        mealElement.style.height = 'auto';
        mealElement.style.marginTop = '30px'
        mealElement.style.display = 'flex';
        mealElement.style.flexDirection = 'column';
        mealElement.style.alignItems = 'center'; // Center elements horizontally
        mealElement.style.justifyContent = 'center'; // Center elements vertically
        mealElement.style.backgroundColor = 'white';


        const mealImage = document.createElement('img');
        mealImage.src = `${mealData.mealImage}`;
        mealImage.style.width = '100%';
        mealImage.style.height = '100%';

        // Create a new div element to display the love icon and meal name
        const divLove = document.createElement('div');
        divLove.style.marginTop = '10px';
        divLove.style.marginBottom = '10px';
        divLove.style.display = 'flex';
        divLove.style.alignItems = 'center';
        divLove.style.justifyContent = 'space-between';
        divLove.style.width = '100%';
        divLove.style.height = 'auto';
        divLove.style.textAlign = 'center';

        // Create a new span element to display the meal name
        const mealText = document.createElement('span');
        mealText.innerHTML = `${mealData.mealName}`;
        mealText.style.marginLeft = '10px';
        mealText.style.color = 'black';
        mealText.style.textAlign = 'center';

        // Create a new span element to display the love icon
        const love = document.createElement('span');
        love.innerHTML = '<i id="heart" class="fas fa-heart"></i>';
        love.style.marginRight = '10px';
        love.style.textAlign = 'center';

        // Check if the meal is already in the favorite list and set the love icon color accordingly
        if (toFill(`${mealData.mealName}`) === true) {
          love.style.color = 'red';
        }
        else love.style.color = 'grey';
        love.style.fontSize = 'x-large';

        // Add a click event listener to the love icon
        love.addEventListener('click', () => {
          // Set the selected meal name and thumbnail
          newStrMeal = `${mealData.mealName}`; //data.meals[0].strMeal + ' loved!';
          newMealThumb = `${meal.strMealThumb}`;//data.meals[0].strMealThumb.replace

        });//appending text, icon to subdivs
        divLove.appendChild(mealText);
        divLove.appendChild(love);

        //appending our subdivs into the mealElement div
        mealElement.appendChild(mealImage);
        mealElement.appendChild(divLove);

        // Create a new div element to hold the list of ingredients and append it to the box  
        const Ingredients = document.createElement('div');
        Ingredients.style.width = '40%';
        Ingredients.style.height = 'auto';
        Ingredients.style.display = 'flex';
        Ingredients.style.flexDirection = 'column';
        Ingredients.style.alignItems = 'center';
        Ingredients.style.justifyContent = 'center';
        Ingredients.style.textAlign = 'center';

        const text = document.createElement('h3');
        text.innerHTML = 'Ingredients';
        text.style.textDecoration = 'underline';
        text.style.color = 'white';


        Ingredients.appendChild(text);

        // Loop through the meal's ingredients and create a new span element for each ingredient
        mealData.mealIngredients.forEach(ingredient => {
          const span = document.createElement('span');
          span.innerHTML = `- ${ingredient}`;
          span.style.color = 'white';

          Ingredients.appendChild(span);
        });

        // Create a new heading element to display the instructions and append it to the container
        const Instructions = document.createElement('h2');
        Instructions.innerHTML = 'Instructions';
        Instructions.style.textDecoration = 'underline';
        Instructions.style.marginTop = '30px';
        Instructions.style.color = 'white';

        // Append the meal image and ingredients to the box and then append the box and other elements to the container
        box.appendChild(mealElement);
        box.appendChild(Ingredients);

        //accessing the imformstion of meal Instructions
        const instructionsText = document.createElement('span');
        instructionsText.style.marginTop = '15px';
        instructionsText.innerHTML = `${mealData.mealInstructions}`;
        instructionsText.style.color = 'white';
        instructionsText.style.textAlign = 'center';
        instructionsText.style.padding = '10px';

        //media queries
        // This function changes the layout of a webpage depending on the width of the window
        function sizeChange() {
          // Get the outer width of the window and store it in the variable "size"
          let size = window.outerWidth;
          // Check if the size is less than 768 pixels
          if (size < 768) {
            box.style.display = 'flex';
            box.style.flexDirection = 'column';
            box.style.gap = '20px';

            mealElement.style.width = '90%';
            mealElement.style.height = 'auto';

            Ingredients.style.width = '100%';
          }
          else {
            // If the window width is greater than or equal to 767px, display elements side by side and center them
            box.style.display = 'flex';
            box.style.flexDirection = 'row';
            box.style.justifyContent = 'space-between';

            mealElement.style.width = '40%';
            mealElement.style.height = 'auto';

            Ingredients.style.width = '50%';
          }
        }
        // Call the sizeChange function whenever the window is resized
        window.addEventListener('resize', function (event) {
          sizeChange();
        });

        // Call the sizeChange function once when the page loads to set the initial layout
        sizeChange();
        
        //appending all the elements into the respective divs and then into container
        Container.appendChild(box);
        Container.appendChild(Instructions);
        Container.appendChild(instructionsText);

        // Log the meal's ingredients to the console
        mealData.mealIngredients.forEach(ingredient => console.log(`- ${ingredient}`));
      } else {
        console.log('Meal not found.');
      }
    }).catch(error => console.log(error));
  }

  // Check if the clicked element is a heart icon, and if it is, add the meal to the favorite list
  if (target.id === 'heart') {
    // If the meal is not already in the favorites list, add it
    if (!isAvailable(newStrMeal, target)) {
      addToMyFavoriteMeals(newMealThumb, newStrMeal);
      // Show notification that the meal was added to favorites list
      showNotification(`${newStrMeal} Added To Favorites List`);
      // Change the color of the heart icon to red to indicate that the meal has been added to favorites list
      target.style.color = 'red';
    }
  }

  // Check if the clicked element is 'My Favorites' link, and if it is, render the favorite meals
  if (target.id === 'my-favorites') {
    renderFav();
  }
}

// This function adds a meal to the user's favorite meals list
// It takes in two arguments - the image source and the name of the meal
function addToMyFavoriteMeals(src, name) {
  // Create a new object representing the favorite meal
  const fav = {
    imgSrc: src,
    imgName: name,
    loved: true
  }
  // Add the new favorite meal object to the user's list of favorite meals
  myFavoriteMeals.push(fav);
}

// This line adds a click event listener to the document and calls the handleClickListener function when a click event occurs.
document.addEventListener('click', handleClickListener);

// This line adds a keypress event listener to the document and calls the handleKeyPress function when a keypress event occurs.
document.addEventListener('keypress', handleKeyPress);


// This async function takes in a meal name and uses the MealDB API to retrieve information about the meal.
async function getMealInfo(mealName) {
  // Use the fetch API to make a request to the MealDB API and retrieve information about the specified meal.
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`);
  const data = await response.json();

  // If the meal exists in the database, extract the relevant information and return it as an object.
  if (data.meals) {
    const mealData = data.meals[0];
    const mealName = mealData.strMeal;
    const mealCategory = mealData.strCategory;
    const mealArea = mealData.strArea;
    const mealInstructions = mealData.strInstructions;
    const mealImage = mealData.strMealThumb;
    const mealIngredients = [];

    // Loop through the meal data and extract the ingredients and measurements for the meal.
    for (let i = 1; i <= 20; i++) {
      const ingredient = mealData[`strIngredient${i}`];
      const measurement = mealData[`strMeasure${i}`];

      // If there are no more ingredients, break out of the loop.
      if (ingredient) {
        mealIngredients.push(`${ingredient} - ${measurement}`);
      } else {
        break;
      }
    }

    // Return an object containing the meal information.
    return {
      mealName,
      mealCategory,
      mealArea,
      mealInstructions,
      mealImage,
      mealIngredients
    };
  } else {
    // If the meal does not exist in the database, return null.
    return null;
  }
}


