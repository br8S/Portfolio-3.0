window.onresize = function (event) {
    //MOBILE VIEW
        if(window.innerWidth < 980){
            document.querySelectorAll('.mobile-container').forEach( mobile => {
                mobile.style.height = window.innerWidth/1.77 + 48 + "px";
            })

            document.querySelectorAll('.mobile').forEach( mobile => {
                mobile.style.height = window.innerWidth/1.77 + "px";
            })
        }
}

window.addEventListener('load', () => {
    //MOBILE VIEW
    if(window.innerWidth < 980){
        document.querySelectorAll('.mobile-container').forEach( mobile => {
            mobile.style.height = window.innerWidth/1.77 + 48 + "px";
        })

        document.querySelectorAll('.mobile').forEach( mobile => {
            mobile.style.height = window.innerWidth/1.77 + "px";
        })
    }
})