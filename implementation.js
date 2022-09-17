document.addEventListener("DOMContentLoaded", () => {

    document.querySelectorAll('.advertising-container-top')[0].innerHTML += "<iframe scrolling='no' style='border: none; width: 100%;' src='https://animmini.com/banners/index-alternative.html'></iframe>"

    var pagePos = document.querySelector('.page-content .container').getBoundingClientRect();
    
    function resizeIframeLeft() {
        if (pagePos.left < 300 && pagePos.left > 100) {
            console.log('left iframe resized')
            document.getElementById('left-ifrm').style.transform = ` scale(${pagePos.left.toFixed(2) / 330})!important`
        }
    }

    function resizeIframeRight() {
        if ((window.innerWidth - pagePos.right) < 300 && (window.innerWidth - pagePos.right) > 100) {
            document.getElementById('right-ifrm').style.transform = `scale(${pagePos.left.toFixed(2) / 330})!important`
        }
    }

    const addIframe = (url, side) => {
        var ifrm = document.createElement("iframe");
        ifrm.setAttribute("scrolling", "no");
        ifrm.setAttribute("src", url);
        document.body.prepend(ifrm);
        switch (side) {
            case "left":
                ifrm.setAttribute('id', 'left-ifrm')
                if (pagePos.left < 300) {
                    ifrm.style.cssText = `-webkit-transform-origin-x: 0; -webkit-transform-origin-y: 0; border: none; width: 300px; position: absolute; height: 800px; left: 0; top: 140px; transform: scale(${pagePos.left.toFixed(2) / 330})`
                } else if (pagePos.left < 100) {
                    ifrm.style.display('none')
                } else {
                    ifrm.style.cssText = `-webkit-transform-origin-x: 0; -webkit-transform-origin-y: 0; border: none; width: 300px; position: absolute; height: 800px; left: 0; top: 140px;`
                }
                break;
            case "right":
                ifrm.setAttribute('id', 'right-ifrm')
                if ((window.innerWidth - pagePos.right) < 300) {
                    ifrm.style.cssText = `-webkit-transform-origin: top right; border: none;  width: 300px; position: absolute; height: 800px; right: 0px; top: 140px ; transform: scale(${pagePos.left.toFixed(2) / 330})`
                } else if ((window.innerWidth - pagePos.right) < 100) {
                    ifrm.style.display('none')
                } else {
                    ifrm.style.cssText = `-webkit-transform-origin: top right; border: none; width: 300px; position: absolute; height: 800px; right: 0px; top: 140px ;`
                }
                break;
        }
    }

    addIframe('https://animmini.com/banners/index-2-alternative.html', 'left')
    addIframe('https://animmini.com/banners/index-2-alternative.html', 'right')



});

window.addEventListener('resize', () => {
    resizeIframeLeft()
    resizeIframeRight()
})