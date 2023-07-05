
document.addEventListener("DOMContentLoaded", function() {
   
    fetch("https://dog.ceo/api/breeds/image/random/4")
      .then(response => response.json()) 
      .then(data => {
        const dogImages = data.message; 
  
        
        const dogImageContainer = document.getElementById("dog-image-container");
  
        // Loop through the array of dog image URLs
        dogImages.forEach(imageUrl => {
          // Create an image element
          const imageElement = document.createElement("img");
          imageElement.src = imageUrl; 
  
        
          dogImageContainer.appendChild(imageElement);
        });
      })
      .catch(error => {
        console.log("Error fetching dog images:", error);
      });
  
   
    fetch("https://dog.ceo/api/breeds/list/all")
      .then(response => response.json()) 
      .then(data => {
        const breeds = data.message; 
  
       
        const dogBreedsContainer = document.getElementById("dog-breeds");
  
        // Create an array to store all the list item elements
        const listItems = [];
  
        // Loop through the breed information object
        for (const breed in breeds) {
          // Create a list item element
          const listItemElement = document.createElement("li");
          listItemElement.textContent = breed;
  
          
          listItems.push(listItemElement);
  
          
          dogBreedsContainer.appendChild(listItemElement);
        }
  
        // Get the breed dropdown element
        const breedDropdown = document.getElementById("breed-dropdown");
  
        // Add an event listener to the breed dropdown
        breedDropdown.addEventListener("change", function() {
          const selectedLetter = breedDropdown.value; // Get the selected letter from the dropdown
  
          // Loop and show/hide based on the selected letter
          listItems.forEach(listItem => {
            if (listItem.textContent.startsWith(selectedLetter)) {
              listItem.style.display = "list-item"; // Show the list item
            } else {
              listItem.style.display = "none"; // Hide the list item
            }
          });
        });
      })
      .catch(error => {
        console.log("Error fetching dog breeds:", error);
      });
  });
  