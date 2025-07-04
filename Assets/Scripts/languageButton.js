var isClicked= false;
const button = document.getElementById('languages-button');
const image = document.getElementById('arrow');
const originalSrc = '../Assets/Images/Arrow_Bottom.svg';
const hoverSrc = '../Assets/Images/Arrow_Bottom_Hover.svg';
const clickSrc = '../Assets/Images/Arrow_Left.svg';

const languagesDropdown = document.getElementById('languages-dropdown');

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
        languagesDropdown.classList.add('hidden');
    } else {
        image.src = clickSrc;
        isClicked = true;   
        languagesDropdown.classList.remove('hidden');
    }
    event.stopPropagation();
});
document.addEventListener('click', function() {
    if (isClicked) {
        image.src = originalSrc;
        isClicked = false;
        languagesDropdown.classList.add('hidden');
    }
});

