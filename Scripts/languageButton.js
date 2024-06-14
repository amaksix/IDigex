var isClicked= false;
const button = document.getElementById('languages-button');
const image = document.getElementById('arrow');
const originalSrc = 'Images/Arrow_Bottom.svg';
const hoverSrc = 'Images/Arrow_Bottom_Hover.svg';
const clickSrc = 'Images/Arrow_Left.svg';
button.addEventListener('mouseover', function() {
    if(!isClicked)
        image.src = hoverSrc;
});

button.addEventListener('mouseout', function() {
    if(!isClicked)
        image.src = originalSrc;
});
button.addEventListener('click', function() {
    if (isClicked) {
        image.src = originalSrc;
        isClicked = false;
    } else {
        image.src = clickSrc;
        isClicked = true;
    }
    event.stopPropagation();
});
document.addEventListener('click', function() {
    if (isClicked) {
        image.src = originalSrc;
        isClicked = false;
    }
});

