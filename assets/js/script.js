// Mouse Over images and they change to the body background
const images = document.getElementsByClassName("images");
/*
images.forEach(image => {
    image.addEventListener('mouseover', () => {
        const newBg = image.getAttribute('data-bg');
        document.body.style.backgroundImage = `url(${newBg})`;
    });

    image.addEventListener('mouseout', () => {
        document.body.style.backgroundImage = ''; // Reset or set to a default image
    });
});

// Image Transition
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');

images.addEventListener('click', () => {
    if (image1.classList.contains('show')) {
        image1.classList.remove('show');
        image2.classList.add('show');
    } else {
        image1.classList.add('show');
        image2.classList.remove('show');
    }
});

// Initially show the first image
image1.classList.add('show');


// For the Favorites Button Modal
var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})
*/
// XAVIER'S CODE
// Deals with Favorites and Favorite's Modal
let listofNAlocations = [];

// Stores locations as Objects
let naLocation1 = {
    'country': 'US', 
    'description': 'New York',
    'image': '../assets/image/NAnewyork.jpg',
    'buttonid': '1LocButton'
}

let naLocation2 = {
    'country': 'US', 
    'description': 'Grand Canyon',
    'image': '../assets/image/NAgrandcanyon.jpg',
    'buttonid': '2LocButton'
}

// Put locations in an array
listofNAlocations.push(naLocation1, naLocation2);

// Function seeks if there is a location in LS(Local Storage), it will change the text in the buttons accordingly
function loadFavButtons() {
    // Loop through LS
    for (x = 25; x > 0; x--) {
        // Find all location's button ID's in LS
        let lsKey = `${x}LocButton`;       
        let lsLocation = JSON.parse(localStorage.getItem(lsKey));
        
        // Save the text inside button
        if (lsLocation === null ){
            continue;
        }
        
        let lsLocationButtonClass = lsLocation.buttonid;
        
        // If the location is in local storage, the text in the box will stay as Unfavorite
        if (localStorage.getItem(lsLocationButtonClass) == null) {
            document.getElementsByClassName(lsLocationButtonClass)[0].value = "Favorite";
        }       
        else {
            document.getElementsByClassName(lsLocationButtonClass)[0].value = "Unfavorite";
        }  
    }
}

// Function sets or deletes locations in LS
function changeFavButton(clickedButton) {
    let classofButton = clickedButton.className;
    let buttonidinlist = '';
    stoppednumberinlist = 0;

    // Get text value of button
    let isFavorited = clickedButton.value;

    // Match pressed buttonid with respective location in array
    for (let i = 0; i < listofNAlocations.length; i++){
        buttonidinlist = listofNAlocations[i].buttonid;
        if (buttonidinlist === classofButton){
            stoppednumberinlist = i;
            break;
        }
    }
    if (isFavorited !== "Unfavorite") {
        // Change button text value
        clickedButton.value = 'Unfavorite'
        // Put location object inside local storage
        const locationObject = listofNAlocations[stoppednumberinlist];
        localStorage.setItem(buttonidinlist, JSON.stringify(locationObject));
    }
    else {
        // Change button text value
        clickedButton.value="Favorite";
        // Remove location object inside local storage 
        localStorage.removeItem(buttonidinlist);
    }
  }

  // Function load a modal
  function loadFavModal(){
    const dialog = document.getElementById('favModal');
    dialog.showModal();
  }

  // Function seeks location object inside LS and puts in modal
  function loadFavLocations(){
    const dialog = document.getElementById('favModal');

    // Get all locations in LS
    for (x = 25; x > 0; x--) {
        // Find Location in LS using lsKey
        let lsKey = `${x}LocButton`;
        let lsLocation = JSON.parse(localStorage.getItem(lsKey));
        if (lsLocation === null ){
            continue;
        }

        // Get object values
        let locationtext = lsLocation.description;
        let lsLocationImagePath = lsLocation.image;

        // If index page, need a new image path
        let titleOfPage = document.title;
        if (titleOfPage == 'Dream Vacations'){
            lsLocationImagePath = lsLocationImagePath.substring(3);
        }

        // Create description of location for modal
        let modaltext = document.createElement('h3');
        modaltext.className = 'modalText';
        modaltext.textContent = locationtext;

        // Create image for modal
        let img = document.createElement('img');
        img.className = 'modalImage';
        img.src = lsLocationImagePath;
        
        // Create favorite button for modal
        let modalFavbutton = document.createElement('input');
        modalFavbutton.type = 'button';
        modalFavbutton.value = 'Unfavorite';
        modalFavbutton.className = lsKey;
        modalFavbutton.id = 'favButton';
        modalFavbutton.onclick = function() { changeFavButton(this); };
        
        // Put created tags inside the modal
        let containter = document.getElementById('favModal');
        containter.appendChild(modaltext);
        containter.appendChild(img);  
        containter.appendChild(modalFavbutton);    
    }
    // Show the appended tags in a modal
    dialog.showModal();
}

  loadFavButtons();
