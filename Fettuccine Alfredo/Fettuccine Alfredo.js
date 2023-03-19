// Get the element with class "div1"
const div1 = document.querySelector('.div1');

// Get the element with class "box1"
const box1 = document.querySelector('.box1');

// Get the element with class "box2"
const box2 = document.querySelector('.box2');

// Get the element with class "item2"
const item2 = document.querySelector('.item2');

// array of data for div1 
const div1Data = [
    'Fettuccine Alfredo',
    'https://www.themealdb.com/images/media/meals/0jv5gx1661040802.jpg',
    'NoTags',
    'https://www.themealdb.com/images/icons/Arrow-Left.png',
    'https://www.themealdb.com/images/icons/Arrow-Right.png'
]

// Create a new <span> element and set its inner HTML to the first value in the div1Data array
const span1 = document.createElement('span');
span1.innerHTML = div1Data[0];
span1.style.marginTop = '30px';

// Set the text color and text alignment of the new <span> element
span1.style.color = 'white';
span1.style.textAlign = 'center';

// Append the new <span> element to the "div1" element
div1.appendChild(span1);

// Create a new <img> element and set its attributes to the second value in the div1Data array
const img1 = document.createElement('img');
img1.style.width = '60%';
img1.style.height = '45%';
img1.src = div1Data[1];

// Append the new <img> element to the "div1" element
div1.appendChild(img1);

// Create a new <span> element and set its inner HTML to the third value in the div1Data array
const span2 = document.createElement('span');
span2.innerHTML = div1Data[2];

// Set the text color and text alignment of the new <span> element
span2.style.color = 'white';
span2.style.textAlign = 'center';

// Append the new <span> element to the "div1" element
div1.appendChild(span2);

// Create a new <div> element and set its display, width, and height properties
const div = document.createElement('div');
div.style.display = 'flex';
div.style.alignItems = 'center';
div.style.justifyContent = 'flex-start';
div.style.width = '100%';
div.style.height = 'auto';

// Create a new <img> element and set its attributes to the fourth value in the div1Data array
const left = document.createElement('img');
left.style.width = '30%';
left.style.height = '60%';
left.src = div1Data[3];

// Add a "left" class to the new <img> element
left.classList.add('left');

// Append the new <img> element to the new <div> element
div.appendChild(left);

// Create a new <img> element and set its attributes to the fifth value in the div1Data array
const right = document.createElement('img');
right.style.width = '30%';
right.style.height = '60%';
right.src = div1Data[4];

// Add a "right" class to the new <img> element
right.classList.add('right');

// Append the new <img> element to the new <div> element
div.appendChild(right);

// Append the new <div> element to the "div1" element
div1.appendChild(div);

// Adding event listener to the document
document.addEventListener('click', function(e){
    // Get the target element
    const target = e.target;
    console.log(target);
// If the target element has a class name of 'left', redirect to index.html
if(target.className === 'left'){
    console.log('left');
    window.location.href = '../sushi/sushi.html';
}

// If the target element has a class name of 'right', redirect to Fettuccine Alfredo.html
if(target.className === 'right'){
    console.log('right');
    window.location.href = '../index/index.html';
}

});



// box2 array links  
const box2Srcs = [
    'https://www.themealdb.com/images/ingredients/Fettuccine.png',
    'https://www.themealdb.com/images/ingredients/Heavy%20Cream.png',
    'https://www.themealdb.com/images/ingredients/Butter.png',
    'https://www.themealdb.com/images/ingredients/Parmesan.png',
    'https://www.themealdb.com/images/ingredients/Parsley.png',
    'https://www.themealdb.com/images/ingredients/Black%20Pepper.png'
] 
// box2 array of names  
const box2Names = [
    '1 lb Fettuccine',
    '1/2 cup Heavy Cream',
    '1/2 cup Butter',
    '1/2 cup Parmesan',
    '2 tbsp Parsley',
    'Black Pepper'
]

// Create a new h3 element and set its innerHTML to "Ingredients"
const Ingredients = document.createElement('h3');
Ingredients.innerHTML = 'Ingredients';
Ingredients.style.marginTop = '30px';
Ingredients.style.color = 'white';
box1.appendChild(Ingredients);

// Loop through the array of ingredient names and image URLs
for (let i = 0; i < box2Names.length; i++) {

  // Create a new div element to hold the image and its name
  const imgDiv = document.createElement('div');
  imgDiv.style.marginTop = '15px';
  imgDiv.style.display = 'flex';
  imgDiv.style.flexDirection = 'column';
  imgDiv.style.textAlign = 'center';
  imgDiv.style.justifyContent = 'center';
  imgDiv.style.gap = '10px';
  imgDiv.style.alignItems = 'center';
  imgDiv.style.width = '30%'; // set container width to one-third of the parent

  // Create a new img element and set its src attribute to the current image URL
  const img = document.createElement('img');
  img.src = box2Srcs[i];
  img.style.width = '100%'; // make the image fill its container
  img.style.height = 'auto'; // preserve aspect ratio

  // Create a new span element and set its innerHTML to the current ingredient name
  const span = document.createElement('span');
  span.innerHTML = box2Names[i];
  span.style.color = 'orange';

  // Append the img and span elements to the imgDiv element
  imgDiv.appendChild(img);
  imgDiv.appendChild(span);

  // Append the imgDiv element to the box2 element
  box2.appendChild(imgDiv);
}


//array of steps
const item2Data = [
    'Cook pasta according to package instructions in a large pot of boiling water and salt.',
    'Add heavy cream and butter to a large skillet over medium heat until the cream bubbles and the butter melts.',
    'Whisk in parmesan and add seasoning (salt and black pepper).',
    'Let the sauce thicken slightly and then add the pasta and toss until coated in sauce.',
    'Garnish with parsley, and it is ready.',
]
//loop throught each step and append it into the dom
for(let i = 0;i < item2Data.length;++i){
    const span = document.createElement('span');
    span.innerHTML = item2Data[i];
    span.style.color = 'white';
    span.style.marginTop = '10px';

    item2.appendChild(span);
}