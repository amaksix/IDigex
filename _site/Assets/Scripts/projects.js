var offsetDef = 40;
const min = 81;
const mobMin = 330;
const max = 327;
const maxMob = 1245;
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
initializeCarousel('#fourteen-project');

function initializeCarousel(containerId) {
    const carousel = document.querySelector(containerId);
    const images = document.querySelectorAll(containerId + ' .carousel-image-container');

    // Clone the first image and append it to the end to create seamless scrolling
    const firstImageClone = images[0].cloneNode(true);
    carousel.appendChild(firstImageClone);

    currentIndexMap[containerId] = 0; // Initialize index for the container
}

var mediaQuery = window.matchMedia('(hover: none) and (pointer: coarse),(max-width: 480px)');
if (mediaQuery.matches) {
    document.querySelector('.projects-grid-container').style.height = mobMin+"vw";
}else
{
    document.querySelector('.projects-grid-container').style.height = min+"vw";
}

var display = document.getElementsByClassName("project-display")[0];
function ScrollToAnchorProject(anchor)
{
    var element = document.getElementById(anchor);
    element.scrollIntoView({behavior: "auto"});
}
   var img = document.getElementById("flipper");
function ChangeHeight() {
    mediaQuery = window.matchMedia('(hover: none) and (pointer: coarse),(max-width: 480px)');
    const projects = document.querySelector('.projects-grid-container');

    var display = document.getElementById("display");
    var displayText = display;
    var displayHeader = document.getElementById("display-header");

    if (projects.style.height == min + "vw" || projects.style.height == mobMin + "vw") {
        if (mediaQuery.matches) {
            projects.style.height = maxMob + "vw";
        } else {
            projects.style.height = max + "vw";
        }

        img.src = "../Assets/Images/Minus.svg";
        display.classList.add("project-display-bottom");
        display.classList.remove("project-display");

        // Use data attributes for text
        displayText.innerHTML = display.dataset.displayLess;
        displayHeader.innerHTML = displayHeader.dataset.lessProjects;

        moveThirdToLast();
    } else {
        if (mediaQuery.matches) {
            projects.style.height = mobMin + "vw";
        } else {
            projects.style.height = min + "vw";
        }

        img.src = "../Assets/Images/Plus.svg";
        display.classList.add("project-display-top");
        ScrollToAnchor("projects-anchor-id");

        // Use data attributes for text
        displayText.innerHTML = display.dataset.displayMore;
        displayHeader.innerHTML = displayHeader.dataset.moreProjects;

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

const elements = document.querySelectorAll('.scrollable-image');
const anchorscroll = document.getElementById('scroll-image-anchor');
const isMobile = window.matchMedia('(hover: none) and (pointer: coarse), (max-width: 480px)').matches;

window.addEventListener('scroll', () => {
  const anchorTop = anchorscroll.getBoundingClientRect().top;
  const scrollY = window.scrollY || window.pageYOffset;
  const baseOffset = scrollY - anchorscroll.offsetTop;

  elements.forEach((element) => {
    if (anchorTop <= 0) {
      element.style.opacity = '1';
     element.style.display = 'block';
      const offset = baseOffset * 0.1/2;

      if (isMobile) {
        element.style.top = `calc(${offset*0.5}px - ${offsetDef}vw)`;
      } else {
        element.style.top = `calc(${offset}px - ${offsetDef}vw)`;
      }
    } else {
      element.style.opacity = '0';

      if (isMobile) {
        element.style.top = offsetDef+'vw';
      } else {
        element.style.top =offsetDef+'vw';
      }
    }
  });
});
