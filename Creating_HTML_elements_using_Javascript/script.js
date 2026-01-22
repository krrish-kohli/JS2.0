// ! 1. Select the Target Element
const appContainer = document.getElementById("app");
const generateBtn = document.getElementById("generateBtn");

// ! 2. Create New HTML Elements (document.createElement())
function createProfileCard() {
  // create the profile card container
  const profileCard = document.createElement("div");
  // add class
  profileCard.className = "profile-card";
  // create an image element for the profile card
  const profileImage = document.createElement("img");
  // add img to the created img element
  profileImage.src =
    "https://cdn.pixabay.com/photo/2021/08/23/01/03/cubic-house-6566412_1280.jpg";

  // create the heading element
  const profileName = document.createElement("h3");
  profileName.textContent = "John Doe";
  // create a paragraph element for the desc
  const profileDescription = document.createElement("p");
  profileDescription.textContent =
    "A passionate web developer with experience in JavaScript and React.";
  // ! 3. Add content to the element created (innerHTML/textContent)
  // ! 4. Add classes or ids if needed //add any attribute
  // Append all the elements to the profile card
  // ! 5. Append the elements to build the structure
  profileCard.appendChild(profileImage);
  profileCard.appendChild(profileName);
  profileCard.appendChild(profileDescription);
  // append the profile card to the container
  // ! 6. Append to the DOM
  appContainer.appendChild(profileCard);
}

// add event listener
generateBtn.addEventListener("click", createProfileCard);
