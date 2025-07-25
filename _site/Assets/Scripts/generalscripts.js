
window.addEventListener("load", (event) => {
    var elems = document.getElementsByClassName("preload")[0].classList.remove("preload");
  });
  function sendEmail()
{
    var emailName = document.getElementById("Email Name").value;
    var emailSubject = document.getElementById("Email Subject").value;
    var emailMessage = document.getElementById("Email Message").value;
    emailMessage.replaceAll("\n","%0D%0A");
    window.open('mailto:lizagvozdeckaya@gmail.com?subject='+emailSubject+'&body='+emailMessage+'%0D%0A'+'Kind Regards,'+'%0D%0A'+emailName+".");
}
function ScrollToAnchor(anchor)
{
    var element = document.getElementById(anchor);
    element.scrollIntoView({behavior: "smooth"});
}

function openInNewTab(url) {
  window.open(url, '_blank').focus();
}

function scrollRight(containerId) {
    const carousel = document.querySelector(containerId);
    const images = document.querySelectorAll(containerId + ' .project-image');
    const totalImages = images.length; // Includes the cloned image now
    var imageWidthVW = 43.74; // Assuming each image is 43.75vw wide
    var mediaQuery = window.matchMedia('(hover: none) and (pointer: coarse),(max-width: 480px)');
    if (mediaQuery.matches) {
        imageWidthVW = 94;
    }else
    {
        imageWidthVW = 43.74;
    }

    // Update current index for this container
    currentIndexMap[containerId]++;

    // Normal scroll, as long as we haven't reached the cloned last image
    if (currentIndexMap[containerId] < totalImages - 1) {
        carousel.style.transition = "transform 0.5s ease"; // Enable smooth scroll
        carousel.style.transform = `translateX(-${currentIndexMap[containerId] * imageWidthVW}vw)`;
    } else {
        // We have reached the cloned image, so snap back to the real first image
        carousel.style.transition = "transform 0.5s ease";
        carousel.style.transform = `translateX(-${currentIndexMap[containerId] * imageWidthVW}vw)`;

        // After the transition to the cloned image completes, snap back to the real first image
        setTimeout(() => {
            carousel.style.transition = "none"; // Disable transition for instant snap
            carousel.style.transform = `translateX(0vw)`; // Snap back to the first real image

            currentIndexMap[containerId] = 0; // Reset index back to the first image
        }, 500); // Wait for the transition to the cloned image to complete (0.5s)
    }
}
      
    
        function movingTextUpAnim(elemID)
        {
            const container = document.getElementById(elemID);
            const text = container.textContent; // Get the text from the element
            container.textContent = ''; // Clear the original text
            // Create an Intersection Observer to watch when the text element comes into view
            const observer = new IntersectionObserver(handleIntersection, {
                root: null, // Use the viewport as the root
                threshold: 1,// Trigger when at least 10% of the element is visible
            });
            observer.container = container;
            observer.text = text;
            // Start observing the text element
            observer.observe(container);
            // Loop through each character and wrap it in a div with the class 'letter'
           
        }
        function animateText(text,container) {

        text.split('').forEach((char, index) => {
            const letter = document.createElement('div');
            
            // Handle spaces separately
            if (char === ' ') {
                letter.className = 'letter space';  // Add 'space' class for spaces
            } else {
                letter.className = 'letter';
            }

            letter.textContent = char === ' ' ? '\u00A0' : char;  // Use non-breaking space for actual spaces

            container.appendChild(letter);

            // Animate each letter with a staggered delay
            setTimeout(() => {
                letter.style.opacity = 1;
                letter.style.transform = 'translateY(0)';
            }, index * 40); // Adjust delay (100ms per letter)
        });
    }
         // Intersection Observer callback
    function handleIntersection(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                observer.container.style.opacity = 1; // Make the text container visible
                animateText(observer.text,observer.container); // Start the letter animation
                observer.disconnect(); // Stop observing once animation starts
            }
        });
    }

// Function to swap elements based on the specified media query
function swapElements() {
    const container = document.getElementById('menu-elem-fourth');
    const box1 = document.getElementById('last-menu-button-container');
    const box2 = document.getElementById('last-menu-id');
    const mediaQuery = window.matchMedia('(hover: none) and (pointer: coarse),(max-width: 480px)');
    if (mediaQuery.matches) {
        // If the media query matches, swap the elements
        container.insertBefore(box2, box1);
    } else {
        // If the media query doesn't match, reset to the original order
        container.insertBefore(box1, box2);
       
    }
    movingTextUpAnim('about');
    movingTextUpAnim('services');
    movingTextUpAnim('contact');
    movingTextUpAnim('projects');
    movingTextUpAnim('first-shot');
    movingTextUpAnim('first-shot-mob');
    movingTextUpAnim('about-mob');
    movingTextUpAnim('contact-mob');
}

// Initial call to handle the swap on page load
swapElements();

// Event listener for resize to handle orientation changes on mobile
window.addEventListener('resize', swapElements);   
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("visible");
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});