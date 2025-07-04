let currentIndexMap = {};
initializeCarousel('#first-project');
initializeCarousel('#third-project');
initializeCarousel('#fourth-project');
initializeCarousel('#fifth-project');
initializeCarousel('#sixt-project');
initializeCarousel('#seventh-project');
initializeCarousel('#eight-project');
initializeCarousel('#nine-project');
initializeCarousel('#ten-project');
initializeCarousel('#eleven-project');
initializeCarousel('#twelve-project');
initializeCarousel('#thirteen-project');
function initializeCarousel(containerId) {
    const carousel = document.querySelector(containerId);
    const images = document.querySelectorAll(containerId + ' .carousel-image-container');

    // Clone the first image and append it to the end to create seamless scrolling
    const firstImageClone = images[0].cloneNode(true);
    carousel.appendChild(firstImageClone);

    currentIndexMap[containerId] = 0; // Initialize index for the container
}
const min = 81;
const mobMin = 330;
const max = 286;
const maxMob = 1160;
var mediaQuery = window.matchMedia('(hover: none) and (pointer: coarse),(max-width: 480px)');
if (mediaQuery.matches) {
    document.querySelector('.projects-grid-container').style.height = mobMin+"vw";
}else
{
    document.querySelector('.projects-grid-container').style.height = min+"vw";
}

var display = document.getElementsByClassName("project-display")[0];

function ChangeHeight(){
    mediaQuery = window.matchMedia('(hover: none) and (pointer: coarse),(max-width: 480px)');
    const projects = document.querySelector('.projects-grid-container');
   
    var displayText = document.getElementById("display");
    var displayHeader = document.getElementById("display-header");
    if(display === undefined)
    {
        display = document.getElementsByClassName("project-display-hidden")[0];
    }	
    var img = document.getElementById("flipper");
    if( projects.style.height == min+"vw" || projects.style.height == mobMin+"vw")
    {
        const sideMoving = document.getElementById("side-moving");
        sideMoving.style.marginLeft = "500vw";
        console.log(sideMoving);
        if (mediaQuery.matches) {
            projects.style.height = maxMob+"vw";
        }else
        {
            projects.style.height = max+"vw";
        }
        img.src = "Images/Minus.svg";
        display.classList.add("project-display-bottom");
        display.classList.remove("project-display");
        displayText.innerHTML = "Display Less";
        displayHeader.innerHTML = "LESS PROJECTS";
        moveThirdToLast();
    }
    else
    {
        const sideMoving = document.getElementById("side-moving");
        sideMoving.style.marginLeft = "300vw";
        if (mediaQuery.matches) {
            projects.style.height = mobMin+"vw";
        }else
        {
            projects.style.height = min+"vw";
        }
       
        img.src = "Images/Plus.svg";
        display.classList.add("project-display-top");  
        ScrollToAnchor("projects-anchor-id");
        displayText.innerHTML = "Display More";
        displayHeader.innerHTML = "MORE PROJECTS";
        moveLastToThird();
    }
   

}
        function moveThirdToLast() {
            
                var list = document.getElementById("projects-grid");
                var items = list.getElementsByClassName("project");
                //console.log(items);
                if (items.length >= 3) {
                    // Get the third item
                    var thirdItem = items[3];
                    // Move the third item to the end
                    list.appendChild(thirdItem);
                    
                }
        }
        function moveLastToThird() {
                var list = document.getElementById("projects-grid");
                var items = list.getElementsByClassName("project");

                if (items.length >= 4) {
                    // Get the last item
                    var lastItem = items[items.length - 1];

                    // Insert the last item at the third position (before the current third item)
                    list.insertBefore(lastItem, items[3]);
                   
                } 
        }