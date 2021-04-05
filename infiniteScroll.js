var lastScrollTop = pageYOffset;
var scrollingDown = true;
var initialWindowHeight;
var pageHeight;

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
    //var maxWindowHeight = Math.max( document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight );

    pageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    if ((st < lastScrollTop && lastScrollTop != pageHeight - 1) || (st === (initialWindowHeight + 1) && (lastScrollTop <= 2 || lastScrollTop === (initialWindowHeight + 1)))){
        scrollingDown = false;
        console.log(st + " " + lastScrollTop + "scrolling up ")
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
    //console.log(scrollingDown)
    if( scrollingDown === true ){
        window.scrollBy(0,1); // scroll down 
        scrolldelay = setTimeout('pageScroll()',10); // scrolls every 10 milliseconds
    }
    else{
        window.scrollBy(0,-1); // scroll up
        scrolldelay = setTimeout('pageScroll()',10);
    }
}

window.addEventListener('load', function() {
    initialWindowHeight = Math.max( document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight );
},false);