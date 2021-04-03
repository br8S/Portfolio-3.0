var lastScrollTop = window.pageYOffset;
var scrollingDown;

window.addEventListener('scroll', () => {
    var st = window.pageYOffset || document.documentElement.scrollTop; 
    if (st > lastScrollTop){
        scrollingDown = true;
        console.log("scrolling down")
    } 
    if (st < lastScrollTop){
        scrollingDown = false;
        console.log("scrolling up")
    }
    lastScrollTop = st <= window.pageYOffset ? window.pageYOffset : st;
    
    if(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight){
        var content_clone = document.querySelector('.content').cloneNode(true);
        document.querySelector('.container').appendChild(content_clone);
        console.log(document.querySelectorAll('.content').length);

        if(document.querySelectorAll('.content').length >= 5){
            var list_of_content = document.querySelectorAll('.content');
            list_of_content[0].remove();
        }
    }

    if(window.scrollY <= 1){
        var content_clone = document.querySelector('.content').cloneNode(true);
        document.querySelector('.content').before(content_clone);

        if(document.querySelectorAll('.content').length >= 5){
            var list_of_content = document.querySelectorAll('.content');
            list_of_content[4].remove();
        }
    }
})

window.onload = pageScroll; 

function pageScroll() {
    if( scrollingDown === true ){
        window.scrollBy(0,1); // scroll down 
        scrolldelay = setTimeout('pageScroll()',10); // scrolls every 10 milliseconds
    }
    else{
        window.scrollBy(0,-1); // scroll up
        scrolldelay = setTimeout('pageScroll()',10);
    }
    // window.scrollBy(0,1); // horizontal and vertical scroll increments
    // scrolldelay = setTimeout('pageScroll()',10); // scrolls every 100 milliseconds
}

/* to delete extra clones 

maybe if we clone as we go down every time we clone we delete first child

if we go up every time we clone we delete last child

maybe we can add more logic so that we need a minimum number of clones before we can even start deleting

*/