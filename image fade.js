var imgArray = [
        'http://placehold.it/300x200',
        'http://placehold.it/200x100',
        'http://placehold.it/400x300'
    ],
    curIndex = 0;
imgDuration = 3000;

function slideShow() {
    document.getElementById('section-heading-lower').className += "fadeOut";
    setTimeout(function () {
        document.getElementById('section-heading-lower').src = imgArray[curIndex];
        document.getElementById('section-heading-lower').className = "";
    }, 1000);
    curIndex++;
    if (curIndex == imgArray.length) {
        curIndex = 0;
    }
    setTimeout(slideShow, imgDuration);
}
slideShow();