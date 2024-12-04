// Deals with Favorites and Favorite's Modal
// Stores locations as Objects
let listoflocations = [];

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

const modal = document.getElementById("videoModal");
const video = document.getElementById("video");
const closeBtn = document.getElementsByClassName("closeVideo")[0];

const videoUrls = [
    "https://www.youtube.com/embed/Xwd8Ec7r0rs?si=SN49FUzarQfKqLDb", //1
    "https://www.youtube.com/embed/OhIzTjCkrJw?si=teHcYLWtll9hO2HQ", //2
    "https://www.youtube.com/embed/32ZYeMqq11g?si=SflbZJVWbzoG89x_", //3
    "https://www.youtube.com/embed/85yLncbNi8c?si=mwIzFufqRlncP83T", //4
    "https://www.youtube.com/embed/0BGNe-sNodE?si=-EPKLyVya0RWdxs3", //5
    "https://www.youtube.com/embed/1JJfWnAryrM?si=clS86Jgfbw5QD8fX", //6
    "https://www.youtube.com/embed/mPlSTrflPvI?si=1sj4SNxyp5BcK6lt", //7
    "https://www.youtube.com/embed/TJohEDj0KPk?si=ZUym8GpJ7S2ZBTPB", //8
    "https://www.youtube.com/embed/z8YLQE3IJp8?si=CmcahH8Mc5vuDYWV", //9
    "https://www.youtube.com/embed/3i29qrnYTPI?si=2BxaW0udWQjnSd4Y", //10
    "https://www.youtube.com/embed/f-tsjV_ydYs?si=ZPVak8VqKd_B0TaG", //11
    "https://www.youtube.com/embed/TE_Gf16EGHA?si=vGSzMYlgUSzQaHX_", //12
    "https://www.youtube.com/embed/XBbzOKhG1bQ?si=WktsCKEbH6eAAOAK", //13
    "https://www.youtube.com/embed/Lu7ozVw7ung?si=XBvVjnEPWD0I9Tpw", //14
    "https://www.youtube.com/embed/ey_L_VzPwEI?si=XiXDklSTkKAIwCxR", //15
    "https://www.youtube.com/embed/Z755vZBf9oM?si=trNt6-LnskR9pNL6", //16
    "https://www.youtube.com/embed/cS-hFKC_RKI?si=psUEUsDtl7f7XsMJ", //17
    "https://www.youtube.com/embed/KrV-EOBbTn8?si=Z4mXRUF4a90VBHoF", //18
    "https://www.youtube.com/embed/-_QBBZh46X4?si=4Q_BcQHAB6p6LUQN", //19
    "https://www.youtube.com/embed/72__Mdioty8?si=AwmVwIfT-me__Tfd", //20
    "https://www.youtube.com/embed/S-rzR_0DTLc?si=Ahthpp2Z5uE1_7Kx", //21
    "https://www.youtube.com/embed/ndPMKcG7IwM?si=iiDIgiJygtkmdbC6", //22
    "https://www.youtube.com/embed/piQGmbBbE2E?si=ZktP6Tibox8ehqV9", //23
    "https://www.youtube.com/embed/AZFsi_XDfNE?si=quX4Ij3xZ6n-6S-p", //24
    "https://www.youtube.com/embed/mbqCXpmo15A?si=n9ta1Yivud3wwNFA", //25
    
];

//Loop through all the videos corresponding to the pictures ID
for (let i = 1; i <= videoUrls.length; i++) {
    const thumbnail = document.getElementById(`thumbnail${i}`);
    if (thumbnail) {
        thumbnail.onclick = function() {
            modal.style.display = "block";
            video.src = videoUrls[i - 1]; // Set video source based on index
        };
    }
}

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

// XAVIER'S CODE

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
        if (isMatch === false ){
            continue;
        }
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


    


