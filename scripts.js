/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 *
 */


//const FRESH_PRINCE_URL =
  //"https://upload.wikimedia.org/wikipedia/en/3/33/Fresh_Prince_S1_DVD.jpg";
//const CURB_POSTER_URL =
  //"https://m.media-amazon.com/images/M/MV5BZDY1ZGM4OGItMWMyNS00MDAyLWE2Y2MtZTFhMTU0MGI5ZDFlXkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_FMjpg_UX1000_.jpg";
//const EAST_LOS_HIGH_POSTER_URL =
  //"https://static.wikia.nocookie.net/hulu/images/6/64/East_Los_High.jpg";

// This is an array of strings (TV show titles)
//let titles = [
  //"Fresh Prince of Bel Air",
  //"Curb Your Enthusiasm",
 // "East Los High",
//];
// Your final submission should have much more data than this, and
// you should use more than just an array of strings to store it all.

const techResources = [
  {
    name: "Code.org",
    category: "Coding",
    cost: "Free",
    skillLevel: "Beginner",
    languageSupport: ["English", "Farsi", "Spanish"],
    offlineFriendly: true,
    link: "https://code.org",
    description: "A visual, beginner-friendly platform that introduces students to coding through games and tutorials.",
    image: "images/codeorg.png"
  },
{
  name: "Khan Academy",
  category: "Coding",
  cost: "Free",
  skillLevel: "Beginner–Intermediate",
  languageSupport: ["English", "Farsi", "French"],
  offlineFriendly: true,
  link: "https://www.khanacademy.org",
  description: "Offers free lessons in computer science, math, science, and more.",
  image: "images/khanacademy.png"
},
{
  name: "Scratch",
  category: "Creative Coding",
  cost: "Free",
  skillLevel: "Beginner",
  languageSupport: ["English", "Farsi", "Arabic"],
  offlineFriendly: false,
  link: "https://scratch.mit.edu",
  description: "A block-based coding platform where students can build interactive stories and games.",
  image: "images/scratch.png"
},
{
  name: "Girls Who Code",
  category: "Women in Tech",
  cost: "Free",
  skillLevel: "Beginner–Intermediate",
  languageSupport: ["English"],
  offlineFriendly: false,
  link: "https://girlswhocode.com",
  description: "A nonprofit working to close the gender gap in tech with free coding programs for girls.",
  image: "images/girlswhocode.png"
},
{
  name: "freeCodeCamp",
  category: "Coding",
  cost: "Free",
  skillLevel: "Intermediate–Advanced",
  languageSupport: ["English", "Spanish"],
  offlineFriendly: true,
  link: "https://www.freecodecamp.org",
  description: "An interactive platform to learn web development, Python, data science, and more.",
  image: "images/freecodecamp.png"
},
{
  name: "Tynker",
  category: "Creative Coding",
  cost: "Freemium",
  skillLevel: "Beginner",
  languageSupport: ["English"],
  offlineFriendly: false,
  link: "https://www.tynker.com",
  description: "A coding platform for kids with fun games, stories, and Minecraft mods.",
  image: "images/tynker.png"
},
{
  name: "W3Schools",
  category: "Web Development",
  cost: "Free",
  skillLevel: "Beginner–Intermediate",
  languageSupport: ["English"],
  offlineFriendly: true,
  link: "https://www.w3schools.com",
  description: "Free tutorials and references for HTML, CSS, JavaScript, and more.",
  image: "images/w3schools.png"
},
{
  name: "Replit",
  category: "Coding",
  cost: "Freemium",
  skillLevel: "Intermediate–Advanced",
  languageSupport: ["English"],
  offlineFriendly: false,
  link: "https://replit.com",
  description: "A cloud-based coding platform to build and share projects in real-time.",
  image: "images/replit.png"
},

{
  name: "SheCodes",
  category: "Women in Tech",
  cost: "Freemium",
  skillLevel: "Beginner–Intermediate",
  languageSupport: ["English"],
  offlineFriendly: false,
  link: "https://www.shecodes.io",
  description: "Workshops and coding classes designed to teach women front-end development and empower them in tech careers.",
  image: "images/shecodes.png"
},

{
  name: "Ada Developers Academy",
  category: "Women in Tech",
  cost: "Free",
  skillLevel: "Intermediate–Advanced",
  languageSupport: ["English"],
  offlineFriendly: false,
  link: "https://adadevelopersacademy.org",
  description: "A tuition-free software development training program for women and gender-expansive adults transitioning into tech.",
  image: "images/adaacademy.png"
},
{
  name: "MDN Web Docs",
  category: "Web Development",
  cost: "Free",
  skillLevel: "Beginner–Advanced",
  languageSupport: ["English", "Spanish", "French"],
  offlineFriendly: false,
  link: "https://developer.mozilla.org",
  description: "A comprehensive resource for learning HTML, CSS, JavaScript, and web standards from beginner to advanced level.",
  image: "images/mdn.png"
},
{
  name: "Sololearn",
  category: "Coding",
  cost: "Freemium",
  skillLevel: "Beginner–Intermediate",
  languageSupport: ["English", "Spanish", "Arabic", "French"],
  offlineFriendly: true,
  link: "https://www.sololearn.com",
  description: "Mobile-first coding platform offering interactive lessons in Python, JavaScript, HTML, and more — perfect for learning on the go.",
  image: "images/sololearn.png"
}

];
// This function adds cards the page to display the data in the array
function showCards(dataArray = techResources) {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  for (let i = 0; i < dataArray.length; i++) {
    let resource = dataArray[i];
    const nextCard = templateCard.cloneNode(true);
    editCardContent(nextCard, resource);
    cardContainer.appendChild(nextCard);
  }
}


    // This part of the code doesn't scale very well! After you add your
    // own data, you'll need to do something totally different here.
    //let imageURL = "";
    //if (i == 0) {
    //  imageURL = FRESH_PRINCE_URL;
    //} else if (i == 1) {
   //   imageURL = CURB_POSTER_URL;
    //} else if (i == 2) {
    //  imageURL = EAST_LOS_HIGH_POSTER_URL;
    //}



function editCardContent(card, resource) {
  card.style.display = "block";
  const headerWrapper = document.createElement("div");
  headerWrapper.classList.add("card-header-wrapper");

  const cardHeader = document.createElement("h2");
  cardHeader.textContent = resource.name;
    
  const cardImage = card.querySelector("img");
  cardImage.src = resource.image;
  cardImage.alt = resource.name + " logo";
    
    
  const existingHeader = card.querySelector("h2");
  if (existingHeader) existingHeader.remove(); 
  headerWrapper.appendChild(cardHeader);
  headerWrapper.appendChild(cardImage);
    

  const contentDiv = card.querySelector(".card-content");
  contentDiv.insertBefore(headerWrapper, contentDiv.firstChild);
  const list = card.querySelector ("ul");
  list.innerHTML = `
  <li><strong>Category:</strong> ${resource.category}</li>
  <li><strong>Skill Level:</strong> ${resource.skillLevel}</li>
  <li><strong>Languages:</strong> ${resource.languageSupport?.join(", ") || "N/A"}</li>
  <li><strong>Offline Friendly:</strong> ${resource.offlineFriendly ? "Yes" : "No"}</li>
  <li><a href="${resource.link}" target="_blank">Visit Resource</a></li>
`;
  // You can use console.log to help you debug!
  // View the output by right clicking on your website,
  // select "Inspect", then click on the "Console" tab
  console.log("new card:", resource.name , "- html: ", card);
}

// This calls the addCards() function when the page is first loaded
//document.addEventListener("DOMContentLoaded", showCards);
window.onload = () => showCards();




function searchResources(keyword) {
  const lower = keyword.toLowerCase();
  const results = techResources.filter(resource =>
    resource.name.toLowerCase().includes(lower) ||
    resource.description.toLowerCase().includes(lower) ||
    resource.category.toLowerCase().includes(lower) ||
    resource.skillLevel.toLowerCase().includes(lower) ||
    resource.languageSupport.join(",").toLowerCase().includes(lower)
  );
  showCards(results);
}

// category filtering
function filterByCategory(category) {
  if (category === "") {
    showCards(); // Show all
    return;
  }

  if (category === "Offline Friendly") {
    const filtered = techResources.filter(resource => resource.offlineFriendly === true);
    showCards(filtered);
  } else {
    const filtered = techResources.filter(resource => resource.category === category);
    showCards(filtered);
  }
}

// alphabetically sorting
function sortByName() {
  const sortedResources = [...techResources].sort((a, b) =>
    a.name.toLowerCase().localeCompare(b.name.toLowerCase())
  );
  showCards(sortedResources);
}

function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) section.scrollIntoView({ behavior: "smooth" });
}


function resetFilters() {
  document.getElementById("searchInput").value = "";
  const selects = document.querySelectorAll(".controls select");
  selects.forEach(select => select.selectedIndex = 0);
  showCards();
}

