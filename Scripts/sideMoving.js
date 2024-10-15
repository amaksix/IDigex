window.addEventListener('scroll', () => {
    // Get the current vertical scroll position
    const sideMoving = document.getElementsByClassName("side-moving");
    const scrollPosition = window.scrollY;
  
    sideMoving[0].style.left = `${-scrollPosition}px`;
  });

  window.addEventListener('scroll', () => {
    // Get the current vertical scroll position
    const sideMoving = document.getElementsByClassName("first-shot-header");
    const scrollPosition = window.scrollY/8;
  
    sideMoving[0].style.left = `${-scrollPosition}px`;
  });
  window.addEventListener('scroll', () => {
    // Get the current vertical scroll position
    const container = document.getElementsByClassName("first-shot-video-container");
    const video = document.getElementsByClassName("first-shot-video");
    const scrollPosition = window.scrollY/8;
    var diff = scrollPosition - container[0].style.left.replace("px", "");
    container[0].style.left = `${container[0].style.left.replace("px", "")-scrollPosition}px`;
    video[0].style.width = `${video[0].style.width.replace("px","") - diff}px`;
  });
  window.addEventListener('scroll', function () {
    const videoContainer = document.getElementById('first-shot-video-container');
  
    // Get the scroll position (y-axis)
    let scrollY = window.scrollY;
  
    // Move to the right as you scroll down (increase 'left' with scroll)
    let moveRight = scrollY * 0.10; // Adjust the multiplier to control speed
  
    // Scale down the video as you scroll down (reduce size)
    let scaleFactor = Math.max(1 - scrollY / 4000, 0.5); // Prevent too much shrinking
  
    // Apply the new position and scale
    videoContainer.style.transform = `translateX(${moveRight}px) scale(${scaleFactor})`;
  });