// Initial state
var scrollPos = 0;
const contentBox = document.getElementById("contentBox");
const contentBoxMargin = window.getComputedStyle(contentBox).marginTop.substring(0, window.getComputedStyle(contentBox).marginTop.length - 2);
const contentBoxPosition = contentBox.offsetTop - contentBoxMargin;

var scrollDown = false;

function isScrollDown() {
    if ((document.body.getBoundingClientRect()).top > scrollPos) {
        scrollDown = false;
    }
    else {
        scrollDown = true;
    }
}

window.addEventListener('scroll', function () {
    isScrollDown();
    scrollPos = (document.body.getBoundingClientRect()).top;
    if (window.scrollY < contentBoxPosition && scrollDown) {
     contentBox.scrollIntoView();
    }
});

