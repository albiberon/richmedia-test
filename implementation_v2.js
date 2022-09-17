document.onreadystatechange = function () {
    if (document.readyState == "interactive") {
            document.querySelectorAll('.advertising-container-top')[0].innerHTML += "<iframe scrolling='no' style='border: none; width: 100%;' src='https://animmini.com/banners/index-alternative.html'></iframe>"
            
            var pagePos = document.querySelector('.page-content .container').getBoundingClientRect();
            const addIframe =  (url, side) => {
                var ifrm = document.createElement("iframe");

                ifrm.setAttribute("scrolling", "no");
                ifrm.setAttribute("src", url);
                document.body.prepend(ifrm);
                console.log( window.innerWidth - pagePos.right)
                
                switch(side) {
                    case "left":
                        if (pagePos.left < 300) {
                            ifrm.style.cssText = `-webkit-transform-origin-x: 0; -webkit-transform-origin-y: 0; border: none; width: 300px; position: absolute; height: 800px; left: 0; top: 140px; transform: scale(${ pagePos.left.toFixed(2) / 300})`
                        } else {
                            ifrm.style.cssText = `-webkit-transform-origin-x: 0; -webkit-transform-origin-y: 0; border: none; width: 300px; position: absolute; height: 800px; left: 0; top: 140px;`
                        }
                     break;
                    case "right":
                        if ((window.innerWidth - pagePos.right) < 300) {
                            ifrm.style.cssText = `-webkit-transform-origin: top right; border: none;  min-width: 150px; width: 300px; position: absolute; height: 130vh; right: 0px; top: 140px ; transform: scale(${ (window.innerWidth - pagePos.right).toFixed(2) / 300})`
                        } else {
                            ifrm.style.cssText = `-webkit-transform-origin: top right; border: none;  min-width: 150px; width: 300px; position: absolute; height: 130vh; right: 0px; top: 140px ;`
                        }
                     break;
                  }
            }
            addIframe('https://animmini.com/banners/index-2-alternative.html', 'left')
            addIframe('https://animmini.com/banners/index-2-alternative.html', 'right')
    }
}