var lastScrollTop = pageYOffset;
var initialWindowHeight;
var pageHeight;
var count = 0;

window.addEventListener('load', function() {
    initialWindowHeight = Math.max( document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight );
},false);

window.onload = pageScroll; 

function pageScroll() {
    //DESKTOP INFINITE SCROLL
    if( window.innerWidth >= 980) {
        
        var st = window.pageYOffset || document.documentElement.scrollTop; // curr scroll value

        pageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight; 
        console.log(st + " " + lastScrollTop + " " + pageHeight)

        // makes sure auto scroll continues to scroll when clones are made
        if ((st < lastScrollTop && lastScrollTop != pageHeight) || (st === (initialWindowHeight + 1) && (lastScrollTop <= 2 || lastScrollTop === (initialWindowHeight + 1)))){
            console.log(st + " " + lastScrollTop + "scroll up")
            window.scrollBy(0,-1); // scroll up
            scrolldelay = setTimeout('pageScroll()',10);
        }
        else{
            window.scrollBy(0,1); // scroll down
            console.log(st + " " + lastScrollTop + "scroll down")
            scrolldelay = setTimeout('pageScroll()',10);
        }

        lastScrollTop = st <= pageYOffset ? pageYOffset : st;
    }
}

window.addEventListener('scroll', () => {

    if( window.innerWidth >= 980) {
        // when we reach bottom of page we want to clone page after to give illusion of infinite scroll down
        if(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight){
            var content_clone = document.querySelector('.content').cloneNode(true);
            document.querySelector('.container').appendChild(content_clone);

            // makes sure we never exceed at most 4 clones of the page
            if(document.querySelectorAll('.content').length >= 5){
                var list_of_content = document.querySelectorAll('.content');
                list_of_content[0].remove();
            }
        }

        // when we reach top of page we want to clone page before to give illusion of infinite scroll up
        if(window.scrollY <= 1){
            var content_clone = document.querySelector('.content').cloneNode(true);
            document.querySelector('.content').before(content_clone);

            // makes sure we never exceed at most 4 clones of the page
            if(document.querySelectorAll('.content').length >= 5){
                var list_of_content = document.querySelectorAll('.content');
                list_of_content[4].remove();
            }
        }
    }
})
