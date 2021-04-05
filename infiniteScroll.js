var lastScrollTop = pageYOffset;
var scrollingDown = true;

window.addEventListener('scroll', () => {
    
    if(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight){
        var content_clone = document.querySelector('.content').cloneNode(true);
        document.querySelector('.container').appendChild(content_clone);

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

    var st = window.pageYOffset || document.documentElement.scrollTop; 
    console.log(window.pageYOffset + " " + document.documentElement.scrollTop)
    // if (st > lastScrollTop || (st === 7905 && lastScrollTop === 10848)){
    //     scrollingDown = true;
    //     console.log(st + " " + lastScrollTop + "scrolling down")
    //     pageScroll;
    // } 

    if ((st < lastScrollTop && st != 7905) || (st === 2945 && (lastScrollTop === 2 || lastScrollTop === 2945))){
        scrollingDown = false;
        console.log(st + " " + lastScrollTop + "scrolling up")
        pageScroll;
    }

    else{
        scrollingDown = true;
        console.log(st + " " + lastScrollTop + "scrolling down")
         pageScroll;
    }

    lastScrollTop = st <= pageYOffset ? pageYOffset : st; //study what this mean
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