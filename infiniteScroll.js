window.addEventListener('scroll', () => {
    if(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight){
        var content_clone = document.querySelector('.content').cloneNode(true);
        //document.querySelector('.content').before(content_clone);
        document.querySelector('.container').appendChild(content_clone);
    }
})

window.onload = pageScroll;

function pageScroll() {
    var content_clone = document.querySelector('.content').cloneNode(true);
    document.querySelector('.content').before(content_clone);
    window.scrollBy(0,1); // horizontal and vertical scroll increments
    scrolldelay = setTimeout('pageScroll()',10); // scrolls every 100 milliseconds
}