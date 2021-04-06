window.onresize = function (event) {
    console.log(window.innerWidth)
    //DESKTOP VIEW
        if(window.innerWidth < 980){
            document.querySelectorAll('.cacti-container').forEach( cacti => {
                cacti.style.height = window.innerWidth/1.77 + "px";
            })

            document.querySelectorAll('.cacti').forEach( cacti => {
                cacti.style.height = window.innerWidth/1.77 + "px";
            })

            document.querySelectorAll('.stussy-container').forEach( stussy => {
                stussy.style.height = window.innerWidth/1.77 + "px";
            })

            document.querySelectorAll('.stussy').forEach( stussy => {
                stussy.style.height = window.innerWidth/1.77 + "px";
            })

            document.querySelectorAll('.ballastpt-container').forEach( ballast => {
                ballast.style.height = window.innerWidth/1.77 + "px";
            })

            document.querySelectorAll('.ballastpt').forEach( ballast => {
                ballast.style.height = window.innerWidth/1.77 + "px";
            })

            document.querySelectorAll('.br8s-container').forEach( br8s => {
                br8s.style.height = window.innerWidth/1.77 + "px";
            })

            document.querySelectorAll('.br8s').forEach( br8s => {
                br8s.style.height = window.innerWidth/1.77 + "px";
            })
        }
}
    //MOBILE VIEW