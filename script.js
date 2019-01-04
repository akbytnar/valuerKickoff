document.getElementById("arrowUp").onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

window.addEventListener('scroll', function () {
    var h = window.innerHeight - 100;
    if (window.pageYOffset > h) {
        document.getElementById("arrowUp").classList.add("active");
    } else {
        document.getElementById("arrowUp").classList.remove("active");
    }
});


//SCROLL ANIMATION IS IN CSS
// // Initial state
// var scrollPos = 0;
// const contentBox = document.getElementById("contentBox");
// const contentBoxMargin = window.getComputedStyle(contentBox).marginTop.substring(0, window.getComputedStyle(contentBox).marginTop.length - 2);
// const contentBoxPosition = contentBox.offsetTop - contentBoxMargin;
//
// var scrollDown = false;
//
// function updateScrollDirection() {
//     if ((document.body.getBoundingClientRect()).top > scrollPos) {
//         scrollDown = false;
//     }
//     else {
//         scrollDown = true;
//     }
// }
//
//
//
//     window.addEventListener('scroll', function () {
//         updateScrollDirection();
//         scrollPos = (document.body.getBoundingClientRect()).top;
//         if (window.scrollY < contentBoxPosition && scrollDown) {
//             // window.setTimeout(function(){
//                 contentBox.scrollIntoView({ behavior: 'smooth' })
//             // },1000);
//         }
//         console.log('animation');
//     });



