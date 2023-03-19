// Get the menu icon and navigation list elements from the HTML
const menuIcon = document.querySelector('.menu-icon');
const navList = document.querySelector('.nav-list');

// Add a click event listener to the menu icon, toggling the 'showing' class of the navigation list when clicked
menuIcon.addEventListener('click', () => {
navList.classList.toggle('showing');
});

// Get the search input and img elements from the HTML
const searchInput = document.getElementById('searchInput');
const img = document.querySelector('img');

//array of Latest meals
const latestMealsImageUrls1 = [
  "https://www.themealdb.com/images/media/meals/g046bb1663960946.jpg",
  "https://www.themealdb.com/images/media/meals/0jv5gx1661040802.jpg",
  "https://www.themealdb.com/images/media/meals/n7qnkb1630444129.jpg",
  "https://www.themealdb.com/images/media/meals/u9l7k81628771647.jpg"
]

//array of Latest meals names
const latestMealsImageUrlsNames1 = [
  "sushi",
  "Fettuccine Alfredo",
  "Chivito uruguayo",
  "Walnut Roll Gužvara"
]
//array of Latest meals subslinks
const latestMealsImageUrlsLinks1 = [
  "./sushi/sushi.html",
  "./Fettuccine Alfredo/Fettuccine Alfredo.html",
  "./sushi/sushi.html",
  "./sushi/sushi.html"
]

//array of Latest meals2
const latestMealsImageUrls2 = [
  "https://www.themealdb.com/images/media/meals/nv5lf31628771380.jpg",
  "https://www.themealdb.com/images/media/meals/tkxquw1628771028.jpg",
  "https://www.themealdb.com/images/media/meals/1ngcbf1628770793.jpg",
  "https://www.themealdb.com/images/media/meals/tnwy8m1628770384.jpg"
]
//array of Latest meals name2
const latestMealsImageUrlsNames2 = [
  "Fresh sardines",
  "Burek",
  "Mushroom soup with buckwheat",
  "Croatian Bean Stew"
]
//array of popularIngredientsUrls
const popularIngredientsUrls = [
  "https://www.themealdb.com/images/ingredients/Chicken.png",
  "https://www.themealdb.com/images/ingredients/Salmon.png",
  "https://www.themealdb.com/images/ingredients/Beef.png",
  "https://www.themealdb.com/images/ingredients/Pork.png"
]

//array of popularIngredients Names
const popularIngredientsUrlsNames = [
  "Chicken",
  "Salmon",
  "Beef",
  "Pork"
]
// An array of image URLs
const randomIngredientImageUrls = [
  "https://www.themealdb.com/images/ingredients/Cornstarch.png",
  "https://www.themealdb.com/images/ingredients/Soya%20Milk.png",
  "https://www.themealdb.com/images/ingredients/Rice%20wine.png",
  "https://www.themealdb.com/images/ingredients/Ground%20Ginger.png",
  "https://www.themealdb.com/images/ingredients/Floury%20Potatoes.png",
  "https://www.themealdb.com/images/ingredients/Boiling%20Water.png",
  "https://www.themealdb.com/images/ingredients/Dill%20Pickles.png",
  "https://www.themealdb.com/images/ingredients/Freshly%20Chopped%20Parsley.png",
  "https://www.themealdb.com/images/ingredients/Green%20Red%20Lentils.png",
  "https://www.themealdb.com/images/ingredients/Cashew%20Nuts.png",
  "https://www.themealdb.com/images/ingredients/Thai%20Fish%20Sauce.png",
  "https://www.themealdb.com/images/ingredients/Rolled%20Oats.png",
  "https://www.themealdb.com/images/ingredients/Hotsauce.png",
  "https://www.themealdb.com/images/ingredients/Celery.png",
  "https://www.themealdb.com/images/ingredients/Thai%20Green%20Curry%20Paste.png",
  "https://www.themealdb.com/images/ingredients/Lime.png",
  "https://www.themealdb.com/images/ingredients/Bread.png",
  "https://www.themealdb.com/images/ingredients/Mirin.png",
  "https://www.themealdb.com/images/ingredients/Chopped%20Onion.png",
  "https://www.themealdb.com/images/ingredients/Macaroni.png",
  "https://www.themealdb.com/images/ingredients/Capers.png",
  "https://www.themealdb.com/images/ingredients/Carrots.png",
  "https://www.themealdb.com/images/ingredients/Charlotte%20Potatoes.png",
  "https://www.themealdb.com/images/ingredients/Passata.png",
  "https://www.themealdb.com/images/ingredients/Extra%20Virgin%20Olive%20Oil.png",
  "https://www.themealdb.com/images/ingredients/Dark%20Soy%20Sauce.png",
  "https://www.themealdb.com/images/ingredients/Salt%20Cod.png",
  "https://www.themealdb.com/images/ingredients/Egg%20White.png",
  "https://www.themealdb.com/images/ingredients/Oregano.png",
  "https://www.themealdb.com/images/ingredients/Barbeque%20Sauce.png",
  "https://www.themealdb.com/images/ingredients/Onion.png",
  "https://www.themealdb.com/images/ingredients/White%20Flour.png",
  "https://www.themealdb.com/images/ingredients/Puff%20Pastry.png",
  "https://www.themealdb.com/images/ingredients/Almonds.png",
  "https://www.themealdb.com/images/ingredients/Apple%20Cider%20Vinegar.png",
  "https://www.themealdb.com/images/ingredients/Green%20Olives.png",
  "https://www.themealdb.com/images/ingredients/Pine%20Nuts.png",
  "https://www.themealdb.com/images/ingredients/Red%20Wine%20Vinegar.png",
  "https://www.themealdb.com/images/ingredients/Dill%20Pickles.png",
  "https://www.themealdb.com/images/ingredients/Icing%20Sugar.png",
  "https://www.themealdb.com/images/ingredients/Tiger%20Prawns.png",
  "https://www.themealdb.com/images/ingredients/Pepper.png",
  "https://www.themealdb.com/images/ingredients/Brandy.png",
  "https://www.themealdb.com/images/ingredients/Black%20Treacle.png",
  "https://www.themealdb.com/images/ingredients/Salt.png",
  "https://www.themealdb.com/images/ingredients/Fresh%20Basil.png",
  "https://www.themealdb.com/images/ingredients/Walnuts.png",
  "https://www.themealdb.com/images/ingredients/Tortillas.png",
  "https://www.themealdb.com/images/ingredients/Raspberry%20Jam.png",
  "https://www.themealdb.com/images/ingredients/Beef%20Kidney.png",
  "https://www.themealdb.com/images/ingredients/Paccheri%20Pasta.png",
  "https://www.themealdb.com/images/ingredients/Herring.png",
  "https://www.themealdb.com/images/ingredients/Unsalted%20Butter.png"
];

// An array of image URL names
const randomIngredientImageUrlsNames = [
  "Cornstarch",
  "Soya Milk",
  "Rice wine",
  "Ground Ginger",
  "Floury Potatoes",
  "Boiling Water",
  "Dill Pickles",
  "Freshly Chopped Parsley",
  "Green Red Lentils",
  "Cashew Nuts",
  "Thai Fish Sauce",
  "Rolled Oats",
  "Hotsauce",
  "Celery",
  "Thai Green Curry paste",
  "Lime",
  "Bread",
  "Mirin",
  "Chopped Onion",
  "Macaroni",
  "Capers",
  "Carrots",
  "Charlotte Potatoes",
  "Passata",
  "Extra Virgin Olive Oil",
  "Dark Soy Sauce",
  "Salt Cod",
  "Egg White",
  "Oregano",
  "Barbeque Sauce",
  "Onion",
  "White Flour",
  "Puff Pastry",
  "Almonds",
  "Apple Cider Vinegar",
  "Green Olives",
  "Pine Nuts",
  "Red Wine Vinegar",
  "Dill Pickles",
  "Icing Sugar",
  "Tiger Prawns",
  "Pepper",
  "Brandy",
  "Black Treacle",
  "Salt",
  "Fresh Basil",
  "Walnuts",
  "Tortillas",
  "Raspberry Jam",
  "Beef Kidney",
  "Paccheri Pasta",
  "Herring",
  "Unsalted Butter",
];

//random meals urls
const randomMealsUrlsDiv1 = [
  "https://www.themealdb.com/images/media/meals/n7qnkb1630444129.jpg",
  "https://www.themealdb.com/images/media/meals/sywrsu1511463066.jpg",
  "https://www.themealdb.com/images/media/meals/020z181619788503.jpg",
  "https://www.themealdb.com/images/media/meals/sstssx1487349585.jpg",
  "https://www.themealdb.com/images/media/meals/sxysrt1468240488.jpg",
  "https://www.themealdb.com/images/media/meals/8x09hy1560460923.jpg",
  "https://www.themealdb.com/images/media/meals/1543774956.jpg",
  "https://www.themealdb.com/images/media/meals/wssvvs1511785879.jpg",
  "https://www.themealdb.com/images/media/meals/sxysrt1468240488.jpg",
  "https://www.themealdb.com/images/media/meals/txsupu1511815755.jpg",
  "https://www.themealdb.com/images/media/meals/urtqut1511723591.jpg",
  "https://www.themealdb.com/images/media/meals/xqvyqr1511638875.jpg",
  "https://www.themealdb.com/images/media/meals/0jv5gx1661040802.jpg",
  "https://www.themealdb.com/images/media/meals/qwtrtp1511799242.jpg",
  "https://www.themealdb.com/images/media/meals/y4jpgq1560459207.jpg",
  "https://www.themealdb.com/images/media/meals/bc8v651619789840.jpg",
  "https://www.themealdb.com/images/media/meals/w8umt11583268117.jpg",
  "https://www.themealdb.com/images/media/meals/wyxwsp1486979827.jpg",
  "https://www.themealdb.com/images/media/meals/1d85821576790598.jpg",
  "https://www.themealdb.com/images/media/meals/wssvvs1511785879.jpg",
  "https://www.themealdb.com/images/media/meals/uwxqwy1483389553.jpg",
  "https://www.themealdb.com/images/media/meals/g046bb1663960946.jpg",
  "https://www.themealdb.com/images/media/meals/xwutvy1511555540.jpg",
  "https://www.themealdb.com/images/media/meals/xrysxr1483568462.jpg",
  "https://www.themealdb.com/images/media/meals/vqpwrv1511723001.jpg",
  "https://www.themealdb.com/images/media/meals/ctg8jd1585563097.jpg",
  "https://www.themealdb.com/images/media/meals/wruvqv1511880994.jpg",
  "https://www.themealdb.com/images/media/meals/urtwux1486983078.jpg",
  "https://www.themealdb.com/images/media/meals/n3xxd91598732796.jpg",
  "https://www.themealdb.com/images/media/meals/txsupu1511815755.jpg",
  "https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg",
  "https://www.themealdb.com/images/media/meals/utxryw1511721587.jpg",
  "https://www.themealdb.com/images/media/meals/u55lbp1585564013.jpg",
  "https://www.themealdb.com/images/media/meals/vptqpw1511798500.jpg",
  "https://www.themealdb.com/images/media/meals/1529442316.jpg",
  "https://www.themealdb.com/images/media/meals/wrpwuu1511786491.jpg",
  "https://www.themealdb.com/images/media/meals/wtqrqw1511639627.jpg",
  "https://www.themealdb.com/images/media/meals/vwrpps1503068729.jpg",
  "https://www.themealdb.com/images/media/meals/vussxq1511882648.jpg",
  "https://www.themealdb.com/images/media/meals/do7zps1614349775.jpg",
  "https://www.themealdb.com/images/media/meals/quuxsx1511476154.jpg",
  "https://www.themealdb.com/images/media/meals/hx335q1619789561.jpg",
  "https://www.themealdb.com/images/media/meals/qysyss1511558054.jpg",
  "https://www.themealdb.com/images/media/meals/k29viq1585565980.jpg"
]

//array of random meals names
const randomMealsUrlsNamesDiv1 = [
  "Chivito uruguayo",
  "Kidney Bean Curry",
  "Ayam Percik",
  "Thai Green Curry",
  "Smoky Lentil Chili with Squash",
  "Keleya Zaara",
  "Fruit and Cream Cheese Breakfast Pastries",
  "Flamiche",
  "Kapsalon",
  "Timbits",
  "Madeira Cake",
  "Spotted Dick",
  "Fettuccine Alfredo",
  "Provençal Omelette Cake",
  "Tunisian Orange Cake",
  "Beef Rendang",
  "Vegetable Shepherd's Pie",
  "Chicken Handi",
  "Classic Christmas pudding",
  "Flamiche",
  "Smoky Lentil Chili with Squash",
  "Sushi",
  "Minced Beef Pie",
  "Hot Chocolate Fudge",
  "Chelsea Buns",
  "Moussaka",
  "Chicken Basquaise",
  "Spicy North African Potato Salad",
  "Tamiya",
  "Timbits",
  "Spicy Arrabiata Penne",
  "English Breakfast",
  "Stuffed Lamb Tomatoes",
  "Fish Stew with Rouille",
  "Sweet and Sour Pork",
  "Ratatouille",
  "Eccles Cakes",
  "Katsu Chicken curry",
  "Steak Diane",
  "Portuguese fish stew (Caldeirada de peixe)",
  "Spanish Tortilla",
  "Roti john",
  "Steak and Kidney Pie",
  "Chicken Quinoa Greek Salad"
]

//making a function which generates our random div's
function randomDivGenerator(flexContainer,value,randomIngredientImageUrls,randomIngredientImageUrlsNames){
  // Loop 4 times to create 4 images
  for (let i = 0; i < value; i++) {
      // Select a random image URL and name from the arrays
      
      const randomNumber = Math.floor(Math.random() * randomIngredientImageUrls.length);
      const randomImageUrl = randomIngredientImageUrls[randomNumber];
      const randomImageName = randomIngredientImageUrlsNames[randomNumber];
  
      // Create a div to hold the image and caption
      const div = document.createElement('div');
      div.style.width = '23%';
      div.style.marginBottom = '15px';
      div.style.height = 'auto';
      div.style.display = 'flex';
      div.style.flexDirection = 'column'; // Set flex direction to column
      div.style.alignItems = 'center';
      div.style.justifyContent = 'center';
      div.style.marginTop = '0px';
      div.style.textAlign = 'center';
  
      // Create an img element for the image and set its attributes
      const img = document.createElement('img');
      img.src = randomImageUrl;
      img.style.width = '100%';
      img.style.height = '100%';
  
      // Create a span element for the caption and set its attributes
      const caption = document.createElement('span');
      caption.innerHTML = randomImageName;
      caption.style.textAlign = 'center';  // Set text align to center
      caption.style.color = 'orange';      // Set text color to orange
      caption.style.marginTop = '10px';    // Add some top margin
  
      // Append the img and caption to the div
      div.appendChild(img);
      div.appendChild(caption);
      
      //media queries

      // Listen for changes in screen size
      
      function sizeChange() {
        let size = window.outerWidth;
        // console.log("Size:", size);
        if (size < 767) {
          // console.log("<767px");
          flexContainer.style.flexDirection = 'column';
          div.style.height = 'auto';
          div.style.width = '100%';
          img.style.width = '90%';
          img.style.height = '90%';
        } 
        else{
          //if size is not less than 767
          flexContainer.style.flexDirection = 'row';
          flexContainer.style.justifyContent = 'space-between';
          div.style.height = 'auto';
          div.style.width = '23%';
          img.style.width = '100%';
          img.style.height = '100%';
        }
      }
      //changes to divs accroding to screen size
      window.addEventListener('resize', function(event) {
        sizeChange();
      });
      
      sizeChange();

      // Append the div to the flex container
      flexContainer.appendChild(div);
  }
}


//making a function which generates our random div's
function DivGenerator(flexContainer,value,randomIngredientImageUrls,randomIngredientImageUrlsNames,latestMealsImageUrlsLinks1){
  // Loop 4 times to create 4 images
  for (let i = 0; i < value; i++) {

      const randomImageUrl = randomIngredientImageUrls[i];
      const randomImageName = randomIngredientImageUrlsNames[i];
      const randomImageUrlLink = latestMealsImageUrlsLinks1[i];
  
      // Create a div to hold the image and caption
      const div = document.createElement('div');
      div.style.width = '23%';
      div.style.height = 'auto';
      div.style.display = 'flex';
      div.style.flexDirection = 'column'; // Set flex direction to column
      div.style.alignItems = 'center';
      div.style.justifyContent = 'center';
      div.style.marginTop = '0px';
      div.style.textAlign = 'center';
  
      // Create an anchor tag, img element for the image and set its attributes

      const anchor = document.createElement('a');
      anchor.href = randomImageUrlLink; // set the href to the image URL
      anchor.style.marginBottom = '15px';
      anchor.style.textDecoration = 'none';
      anchor.style.display = 'flex';
      anchor.style.flexDirection = 'column';
      anchor.style.alignItems = 'center';
      anchor.style.justifyContent = 'center';
      anchor.style.textAlign = 'center';
      
      const img = document.createElement('img');
      img.src = randomImageUrl;
      img.style.width = '100%';
      img.style.height = '100%';

      // Create a span element for the caption and set its attributes
      const caption = document.createElement('span');
      caption.innerHTML = randomImageName;
      caption.style.textAlign = 'center';  // Set text align to center
      caption.style.color = 'orange';      // Set text color to orange
      caption.style.marginTop = '10px';    // Add some top margin

      // Append the img and caption to the anchor
      anchor.appendChild(img);
      anchor.appendChild(caption);

      // Append the anchor to the div
      div.appendChild(anchor);

      //media queries
      
      function sizeChange() {
        var size = window.outerWidth;
        // console.log("Size:", size);
        if (size < 767) {
          console.log("<767px");
          flexContainer.style.flexDirection = 'column';
          div.style.height = 'auto';
          div.style.width = '100%';
          img.style.width = '90%';
          img.style.height = '90%';
        } 
        else{
          flexContainer.style.flexDirection = 'row';
          flexContainer.style.justifyContent = 'space-between';
          div.style.height = 'auto';
          div.style.width = '23%';
          img.style.width = '100%';
          img.style.height = '100%';
        }
      }
      //sizeChange function is being called as per screen size changes
      window.addEventListener('resize', function(event) {
        sizeChange();
      });
      
      sizeChange();
  
      // Append the div to the flex container
      flexContainer.appendChild(div);
  }
}
//selecting latest meals
const latestMeals2 = document.querySelector('.latest-meals2');
DivGenerator(latestMeals2,4,latestMealsImageUrls1,latestMealsImageUrlsNames1,latestMealsImageUrlsLinks1)

//selecting latest meals
const latestMeals3 = document.querySelector('.latest-meals3');
DivGenerator(latestMeals3,4,latestMealsImageUrls2,latestMealsImageUrlsNames2,latestMealsImageUrlsLinks1)

//selecting popular meals
const popularIngredientsDiv2 = document.querySelector('.Popular-Ingredients-div2');
DivGenerator(popularIngredientsDiv2,4,popularIngredientsUrls,popularIngredientsUrlsNames,latestMealsImageUrlsLinks1)

// Select the random ingredients element
const Container = document.querySelector('.flex-container');
randomDivGenerator(Container,4,randomIngredientImageUrls,randomIngredientImageUrlsNames);

//select the random meals div1
const randomMealsDiv2 = document.querySelector('.random-meals-div2');
randomDivGenerator(randomMealsDiv2,4,randomMealsUrlsDiv1,randomMealsUrlsNamesDiv1);

//select the random meals div2
const randomMealsDiv3 = document.querySelector('.random-meals-div3');
randomDivGenerator(randomMealsDiv3,4,randomMealsUrlsDiv1,randomMealsUrlsNamesDiv1);


const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const container = document.querySelector('.browse-by-name-div2');
  container.style.display = 'flex';
  container.style.justifyContent = 'center';
  container.style.alignItems = 'center';
  container.style.textAlign = 'center';

  // Loop through each letter in the alphabet
  for (let i = 0; i < letters.length; i++) {
    const letter = letters[i];

    // Create a new link element
    const link = document.createElement('a');
    link.href = '#'; // Replace with the actual link you want to use
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.classList.add('browse-by-name-link');
    link.textContent = letter;
    link.style.textDecoration = 'none';
    link.style.color = 'orange';
    link.style.fontWeight = 'bold';

    link.addEventListener('mouseover', function() {
      link.style.color = '#f9eb80';
    });

    link.addEventListener('mouseleave', function() {
      link.style.color = 'orange';
    });

    // Create a new span element for the slash
    const slash = document.createElement('span');
    slash.classList.add('bbn-text');
    if(letter !== 'Z') slash.innerHTML = '&nbsp;/&nbsp;';
    slash.style.fontWeight = 'bold';
    slash.style.color = 'white';

    // Add the link and slash to the container element
    container.appendChild(document.createElement('span').appendChild(link));
    container.appendChild(slash);
  }
