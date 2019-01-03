const contentBox = document.getElementById("contentBox");
const contentBoxMargin = window.getComputedStyle(contentBox).marginTop.substring(0, window.getComputedStyle(contentBox).marginTop.length - 2);
const contentBoxPosition = contentBox.offsetTop - contentBoxMargin;

var scrollDown=false;
function scrollToContent (){
    //setTimeout(function () {
        if(window.scrollY < contentBoxPosition && scrollDown){
            console.log('pos');
            window.scrollBy(
                {top: contentBoxPosition}
            );
    }

   // }, 50);
}

// Initial state
var scrollPos = 0;
// adding scroll event
window.addEventListener('scroll', function(){
    // detects new state and compares it with the new one
    if ((document.body.getBoundingClientRect()).top > scrollPos){
        scrollDown=false;
    }
    else
    {
        scrollDown=true;
    }
    // saves the new position for iteration.
    scrollPos = (document.body.getBoundingClientRect()).top;
});



// function scrollToContent (){
//     if (!action){
//         action = true;
//         console.log('action ashjdbdsjd');
//         setTimeout(function () {
//             if(window.scrollY <= contentBoxPosition){
//                 window.scrollTo(
//                     {top: contentBoxPosition,
//                         behavior: 'smooth'}
//                 )
//             }
//         }, 5);
//     }
//
// }

