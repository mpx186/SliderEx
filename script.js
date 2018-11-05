let activeElement = 0;
const interval = 5000;

const colorImages = ['img/s1.png', 'img/s2.png', 'img/s3.png'];
const greyImages = ['img/s1a.png', 'img/s2a.png', 'img/s3a.png'];
const names = ['Anna Baugard', 'John Snow', 'Arek Pawłowicz'];
const professions = ['Programistka JS', 'UX/UI Designer', 'front-end developer'];

const imgColorHtml = document.querySelector('.color');
const imgGrayHtml = document.querySelector('.grey');
const h1Html = document.querySelector('.member h1');
const h2Html = document.querySelector('.member h2');


function changeElement() {
    activeElement++

    if (activeElement == colorImages.length) {
        activeElement = 0;
    }

    imgColorHtml.src = colorImages[activeElement];
    imgGrayHtml.src = greyImages[activeElement];
    h1Html.textContent = names[activeElement];
    h2Html.textContent = professions[activeElement];

}

setInterval(changeElement, interval);