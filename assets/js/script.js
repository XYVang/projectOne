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
let listoflocations = [];

// Stores locations as Objects

// NA Locations
let Location1 = {
    'country': 'NA', 
    'description': 'New York',
    'image': '../Images/NAnewyork.jpg',
    'buttonid': '1LocButton'
}

let Location2 = {
    'country': 'NA', 
    'description': "Arizona's Grand Canyon",
    'image': '../Images/NAgrandcanyon.jpg',
    'buttonid': '2LocButton'
}

let Location3 = {
    'country': 'NA', 
    'description': 'Banff National Park',
    'image': '../Images/Banff.jpeg',
    'buttonid': '3LocButton'
}

let Location4 = {
    'country': 'NA', 
    'description': 'Jasper National Park',
    'image': '../Images/Jasper National Park.jpeg',
    'buttonid': '4LocButton'
}

let Location5 = {
    'country': 'NA', 
    'description': "Tulum Mexico",
    'image': '../Images/Tulum.jpeg',
    'buttonid': '5LocButton'
}

// SA Locations
let Location6 = {
    'country': 'SA', 
    'description': 'Argentine Patagonia',
    'image': '../Images/Argentine Patagonia.jpeg',
    'buttonid': '6LocButton'
}

let Location7 = {
    'country': 'SA', 
    'description': "Chilean Patagonia",
    'image': '../Images/Chilean Patagonia.jpeg',
    'buttonid': '7LocButton'
}

let Location8 = {
    'country': 'SA', 
    'description': 'Costa Rica',
    'image': '../Images/Costa Rica.jpeg',
    'buttonid': '8LocButton'
}

let Location9 = {
    'country': 'SA', 
    'description': 'Galápagos Islands',
    'image': '../Images/Galapagos Islands.jpeg',
    'buttonid': '9LocButton'
}

let Location10 = {
    'country': 'SA', 
    'description': "Chilean Patagonia",
    'image': '../Images/Torres del Paine National Park.jpeg',
    'buttonid': '10LocButton'
}

// Europe Locations
let Location11 = {
    'country': 'EU', 
    'description': 'Paris',
    'image': '../Images/Paris.jpeg',
    'buttonid': '11LocButton'
}

let Location12 = {
    'country': 'EU', 
    'description': "Swiss Alps",
    'image': '../Images/Swiss Alps.jpeg',
    'buttonid': '12LocButton'
}

let Location13 = {
    'country': 'EU', 
    'description': 'Rome',
    'image': '../Images/Rome.jpeg',
    'buttonid': '13LocButton'
}

let Location14 = {
    'country': 'EU', 
    'description': 'London',
    'image': '../Images/London.jpeg',
    'buttonid': '14LocButton'
}

let Location15 = {
    'country': 'EU', 
    'description': "Amsterdam",
    'image': '../Images/Amsterdam.jpeg',
    'buttonid': '15LocButton'
}

// Africa Locations
let Location16 = {
    'country': 'AFR', 
    'description': 'Serengeti National Park',
    'image': '../Images/Serengeti National Park.jpeg',
    'buttonid': '16LocButton'
}

let Location17 = {
    'country': 'AFR', 
    'description': "Victoria Falls",
    'image': '../Images/Victoria Falls.jpeg',
    'buttonid': '17LocButton'
}

let Location18 = {
    'country': 'AFR', 
    'description': 'Tanzania',
    'image': '../Images/Tanzania.jpeg',
    'buttonid': '18LocButton'
}

let Location19 = {
    'country': 'AFR', 
    'description': 'Mauritius',
    'image': '../Images/Mauritius.jpeg',
    'buttonid': '19LocButton'
}

let Location20 = {
    'country': 'AFR', 
    'description': "Masai Mara National Reserve",
    'image': '../Images/Masai Mara National Reserve.jpeg',
    'buttonid': '20LocButton'
}

// Asian Locations
let Location21 = {
    'country': 'AS', 
    'description': 'Maldives',
    'image': '../Images/Maldives.jpeg',
    'buttonid': '21LocButton'
}

let Location22 = {
    'country': 'AS', 
    'description': "Tokyo",
    'image': '../Images/Tokyo.jpeg',
    'buttonid': '22LocButton'
}

let Location23 = {
    'country': 'AS', 
    'description': 'Phuket',
    'image': '../Images/Phuket.jpeg',
    'buttonid': '23LocButton'
}

let Location24 = {
    'country': 'AS', 
    'description': 'Sagarmatha National Park',
    'image': '../Images/Sagarmatha National Park.jpeg',
    'buttonid': '24LocButton'
}

let Location25 = {
    'country': 'AS', 
    'description': "Hong Kong",
    'image': '../Images/Hong Kong.jpeg',
    'buttonid': '25LocButton'
}
// END OF LOCATION OBJECTS

// Put locations in an array
listoflocations.push(Location1, Location2, Location3, Location4, Location5, Location6, Location7, Location8,
    Location9, Location10, Location12, Location13, Location14, Location15, Location16,
    Location17, Location18, Location19, Location20, Location21, Location22, Location23,
    Location24, Location25
);

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
        // Array of images on the present page
        let imageonrightpage = document.getElementsByTagName('input');
        let imagesinarray = [];
        let imagekey = '';
        for (let a = 0; a < imageonrightpage.length; a++){
            imagekey = imageonrightpage[a].className;
            imagesinarray.push(imagekey);

        }
        // Match image on page to local storage
        let isMatch = imagesinarray.some(imagesinarray => imagesinarray === lsKey)
        console.log(isMatch)
        if (isMatch === false ){
            continue;
        }
        // If the location is in local storage, the text in the box will stay as Unfavorite
        if (localStorage.getItem(lsLocationButtonClass) == null) {
            console.log(document.getElementsByClassName(lsLocationButtonClass))
            document.getElementsByClassName(lsLocationButtonClass)[0].value = "Favorite";
        }       
        else {
            console.log(document.getElementsByClassName(lsLocationButtonClass))
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
    for (let i = 0; i < listoflocations.length; i++){
        buttonidinlist = listoflocations[i].buttonid;
        if (buttonidinlist === classofButton){
            stoppednumberinlist = i;
            break;
        }
    }
    if (isFavorited !== "Unfavorite") {
        // Change button text value
        clickedButton.value = 'Unfavorite'
        // Put location object inside local storage
        const locationObject = listoflocations[stoppednumberinlist];
        console.log(locationObject);
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

  // Function to close modal
  function closeFavModal(){
    location.reload();
  }

  // Function seeks location object inside LS and puts in modal
  function loadFavLocations(){
    const dialog = document.getElementById('favModal');
    let containter = document.getElementById('favModal');

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
        containter.appendChild(modaltext);
        containter.appendChild(img);  
        containter.appendChild(modalFavbutton);    
    }
    // Create close button for modal
    let modalClosebutton = document.createElement('input');
    modalClosebutton.type = 'button';
    modalClosebutton.value = 'Close';
    modalClosebutton.className = 'closeButton';
    modalClosebutton.onclick = function() { closeFavModal(); };
    containter.appendChild(modalClosebutton); 

    // Show the appended tags in a modal
    dialog.showModal();
}

  loadFavButtons();

  
const thumbnail1 = document.getElementById("thumbnail1");
const modal = document.getElementById("videoModal");
const video = document.getElementById("video");
const closeBtn = document.getElementsByClassName("close")[0];

//When clicking on an image, a video pops up
thumbnail1.onclick = function() {
    modal.style.display = "block";
    video.src = "https://www.youtube.com/embed/HGTJBPNC-Gw?si=rmaG4O2xSi4knJge"; // Replace with your video URL
}

// thumbnail1.onclick = function() {
//     modal.style.display = "block";
//     video.src = "https://www.youtube.com/embed/HGTJBPNC-Gw?si=rmaG4O2xSi4knJge"; // Replace with your video URL
// }

// thumbnail1.onclick = function() {
//     modal.style.display = "block";
//     video.src = "https://www.youtube.com/embed/HGTJBPNC-Gw?si=rmaG4O2xSi4knJge"; // Replace with your video URL
// }

// thumbnail1.onclick = function() {
//     modal.style.display = "block";
//     video.src = "https://www.youtube.com/embed/HGTJBPNC-Gw?si=rmaG4O2xSi4knJge"; // Replace with your video URL
// }

// thumbnail1.onclick = function() {
//     modal.style.display = "block";
//     video.src = "https://www.youtube.com/embed/HGTJBPNC-Gw?si=rmaG4O2xSi4knJge"; // Replace with your video URL
// }

//For when you click out of the modal of the video, the video closes
closeBtn.onclick = function() {
    modal.style.display = "none";
    video.src = ""; // Stop the video when the modal is closed
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        video.src = ""; // Stop the video when the modal is closed
    }
}